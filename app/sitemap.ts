import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const pages = [
  { path: '',                  priority: 1.0 },
  { path: '/membership',       priority: 0.9 },
  { path: '/suites',           priority: 0.9 },
  { path: '/conference-rooms', priority: 0.8 },
  { path: '/av-studio',        priority: 0.8 },
  { path: '/faq',              priority: 0.7 },
  { path: '/gallery',          priority: 0.6 },
  { path: '/privacy',          priority: 0.2 },
  { path: '/terms',            priority: 0.2 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    priority,
  }))
}
