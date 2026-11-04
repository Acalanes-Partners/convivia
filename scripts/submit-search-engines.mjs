// Tells Google Search Console and Bing about every page on the live site.
//
//   1. Reads the live sitemap.
//   2. Google: submits the sitemap through the Search Console API (needs GOOGLE_SERVICE_ACCOUNT_JSON).
//   3. Bing (and other IndexNow engines): submits every page URL through IndexNow (no secret needed).
//   4. Bing Webmaster Tools: submits the sitemap through the Bing API (needs BING_WEBMASTER_API_KEY).
//
// Steps whose credentials are missing are skipped. Pass --dry-run to only list what would be sent.

import { createSign } from 'node:crypto'

const SITE_URL = process.env.SITE_URL || 'https://www.conviviawork.com'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`
const GSC_PROPERTY = process.env.GSC_PROPERTY || `${SITE_URL}/`
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '4f63b122b069ce63b5a97abfdf381834'
const DRY_RUN = process.argv.includes('--dry-run')

const results = []

function report(step, ok, detail) {
  results.push({ step, ok })
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${step}${detail ? ` — ${detail}` : ''}`)
}

async function readSitemap() {
  const res = await fetch(SITEMAP_URL)
  if (!res.ok) throw new Error(`Could not read ${SITEMAP_URL} (HTTP ${res.status})`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

// Google service-account sign-in (JWT bearer flow), without extra packages.
async function googleAccessToken(serviceAccount) {
  const now = Math.floor(Date.now() / 1000)
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url')
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`
  const signature = createSign('RSA-SHA256').update(unsigned).sign(serviceAccount.private_key, 'base64url')

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  })
  const body = await res.json()
  if (!res.ok) throw new Error(`Google sign-in failed: ${body.error_description || body.error}`)
  return body.access_token
}

async function submitToGoogle() {
  const step = 'Google Search Console: submit sitemap'
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON) return console.log(`SKIP ${step} — GOOGLE_SERVICE_ACCOUNT_JSON not set`)
  if (DRY_RUN) return console.log(`DRY  ${step} — ${SITEMAP_URL} to property ${GSC_PROPERTY}`)

  const token = await googleAccessToken(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON))
  const base = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`
  const res = await fetch(base, { method: 'PUT', headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) return report(step, false, `HTTP ${res.status} ${await res.text()}`)

  // Read back what Google has on file for the sitemap.
  const status = await fetch(base, { headers: { Authorization: `Bearer ${token}` } }).then((r) => r.json())
  const submitted = status.contents?.[0]?.submitted
  report(step, true, `last downloaded ${status.lastDownloaded || 'not yet'}${submitted ? `, ${submitted} URLs on file` : ''}`)
}

async function submitToIndexNow(urls) {
  const step = `IndexNow (Bing and others): submit ${urls.length} pages`
  if (DRY_RUN) return console.log(`DRY  ${step}\n${urls.map((u) => `       ${u}`).join('\n')}`)

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  // 200 = accepted, 202 = accepted and key check pending.
  report(step, res.status === 200 || res.status === 202, `HTTP ${res.status}`)
}

async function submitToBing() {
  const step = 'Bing Webmaster Tools: submit sitemap'
  if (!process.env.BING_WEBMASTER_API_KEY) return console.log(`SKIP ${step} — BING_WEBMASTER_API_KEY not set`)
  if (DRY_RUN) return console.log(`DRY  ${step} — ${SITEMAP_URL}`)

  const res = await fetch(
    `https://ssl.bing.com/webmaster/api.svc/json/SubmitFeed?apikey=${process.env.BING_WEBMASTER_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ siteUrl: `${SITE_URL}/`, feedUrl: SITEMAP_URL }),
    },
  )
  report(step, res.ok, res.ok ? '' : `HTTP ${res.status} ${await res.text()}`)
}

const urls = await readSitemap()
console.log(`Found ${urls.length} pages in ${SITEMAP_URL}\n`)

for (const task of [submitToGoogle, () => submitToIndexNow(urls), submitToBing]) {
  try {
    await task()
  } catch (err) {
    report(task.name || 'step', false, err.message)
  }
}

if (results.some((r) => !r.ok)) process.exit(1)
