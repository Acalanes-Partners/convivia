import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { buttonBase } from '@/lib/theme'

type Cta = { label: string; href: string }

type Section = {
  heading: string
  body?: string
  bullets?: string[]
}

type Faq = { q: string; a: string }

type LandingPageProps = {
  heading: string
  intro: string
  image: { src: string; alt: string }
  ctas: Cta[]
  sections: Section[]
  faqs: Faq[]
  related: Cta[]
}

const isExternal = (href: string) => href.startsWith('http')

function CtaLink({ cta, className }: { cta: Cta; className: string }) {
  return isExternal(cta.href) ? (
    <Link href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
      {cta.label}
    </Link>
  ) : (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  )
}

export default function LandingPage({ heading, intro, image, ctas, sections, faqs, related }: LandingPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pt-20 pb-12 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl text-[#0c0c0c]">{heading}</h1>
          <p className="text-lg text-black/70">{intro}</p>
          <div className="flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <CtaLink key={cta.label} cta={cta} className={`${buttonBase} px-6 py-3 text-sm`} />
            ))}
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-3xl border border-black/5 md:h-[26rem]">
          <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Details */}
      <section className="bg-[#f5f0eb]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.heading} className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0c0c0c]">{section.heading}</h2>
              {section.body && <p className="mt-3 text-black/70">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-4 space-y-2 text-black/70">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#fe904d]" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <h2 className="font-display text-4xl text-[#0c0c0c]">Common questions</h2>
        <div className="divide-y divide-black/10">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-5">
              <h3 className="font-semibold text-[#0c0c0c]">{faq.q}</h3>
              <p className="mt-2 text-black/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + related links */}
      <section className="bg-[#2a2320]">
        <div className="mx-auto max-w-5xl px-10 py-16 text-center text-white space-y-6">
          <h2 className="font-display text-5xl">See the space in person.</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            1485 Treat Blvd., Walnut Creek, CA 94597. Walkable to Pleasant Hill BART and half a mile from Highway 680.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {ctas.map((cta) => (
              <CtaLink key={cta.label} cta={cta} className={`${buttonBase} px-8 py-3 text-sm`} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4 text-sm text-white/60">
            {related.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
