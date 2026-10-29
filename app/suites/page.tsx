import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buttonBase } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Private Office & Team Suites in Walnut Creek',
  description:
    'Private offices and team suites for 1–12 people in Walnut Creek, CA, with full access to coworking lounges, kitchen, conference rooms, and events. Book a tour.',
  alternates: { canonical: '/suites' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  contact: 'https://conviviawork.coworksapp.com/membership-request/716',
}

const teamSuite = {
  name: 'Custom Team Suite',
  price: 'Custom',
  cadence: 'per team',
  intro: 'Private studios for teams of 2–12 with full access to the shared ecosystem.',
  features: ['Dedicated office with natural light + private storage', 'Additional conference room allotments', 'Closed-door focus plus access to open coworking zones', 'Concierge support for IT, guests, and workshops'],
  highlight: 'Scale-ups, agencies, and distributed teams get a branded home base.',
}

const suites = [
  { src: '/assets/suites/corner-office.jpg',      alt: 'Corner private office with lounge seating and two walls of windows' },
  { src: '/assets/suites/five-person-suite.jpg',  alt: 'Five-person suite with windows and standing desks' },
  { src: '/assets/suites/office-04.jpg',          alt: 'Private office with windows, desk, and storage' },
  { src: '/assets/suites/three-person-suite.jpg', alt: 'Three-person suite with standing desks' },
]

export default function SuitesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 space-y-4">
        <h1 className="font-display text-6xl text-[#0c0c0c]">A private home base inside a thriving community.</h1>
        <p className="max-w-2xl text-black/70">
          From single offices for focused solo work to suites built for growing teams, every private space comes with
          full access to Convivia Work&apos;s kitchen, lounges, conference rooms, and community events.
        </p>
        <Link href={URLS.tour} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-6 py-3 text-sm`}>
          Book a Tour
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid overflow-hidden rounded-3xl border border-black/5 bg-[#f5f0eb] shadow-sm md:grid-cols-2">
          <div className="relative h-80 md:h-auto">
            <Image
              src="/assets/suites/team-suite.jpg"
              alt="New Team Suite with seven desks and two TV screens"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">{teamSuite.cadence}</p>
                <h2 className="text-2xl font-bold text-[#0c0c0c]">{teamSuite.name}</h2>
              </div>
              <p className="text-3xl font-bold text-[#0c0c0c]">{teamSuite.price}</p>
            </div>
            <p className="mt-4 text-black/70">{teamSuite.intro}</p>
            <ul className="mt-4 space-y-2 text-black/70">
              {teamSuite.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#fe904d]" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-black/60">{teamSuite.highlight}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={URLS.tour} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 py-2 text-sm`}>
                Book a tour
              </Link>
              <Link href={URLS.contact} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 py-2 text-sm`}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 space-y-6">
        <h2 className="font-display text-4xl text-[#0c0c0c]">Explore our offices and suites</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {suites.map((suite) => (
            <div key={suite.src} className="relative h-64 md:h-80 overflow-hidden rounded-3xl border border-black/5">
              <Image src={suite.src} alt={suite.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={URLS.tour} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-6 py-3 text-sm`}>
            Book a Tour
          </Link>
        </div>
      </section>
    </div>
  )
}
