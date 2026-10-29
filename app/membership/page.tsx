import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonBase } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Coworking Membership Plans & Pricing',
  description:
    'Convivia Work pricing in Walnut Creek: Day Pass $50, Coworking Membership $382/month, Dedicated Desk $450/month, custom team suites, and business mail service from $50/month.',
  alternates: { canonical: '/membership' },
}

const URLS = {
  tour:      'https://conviviawork.coworksapp.com/tour-request/716',
  dayPass:   'https://conviviawork.coworksapp.com/day-pass-signup/716?plan=11611',
  cowork:    'https://conviviawork.coworksapp.com/membership-signup/11506',
  dedicated: 'https://conviviawork.coworksapp.com/membership-signup/11777',
  contact:   'https://conviviawork.coworksapp.com/membership-request/716',
  mailMember:    'https://conviviawork.coworksapp.com/membership-signup/13314',
  mailNonMember: 'https://conviviawork.coworksapp.com/membership-signup/13315',
}

const tiers = [
  {
    name: 'Day Pass',
    price: '$50',
    cadence: 'per day',
    intro: 'Drop in for a focused workday and sample the Convivia energy.',
    features: ['Adjustable standing desk + ergonomic seating', 'External monitor and laptop stand + power + fast and reliable WiFi', 'Kitchen and coffee program access', 'Phone booths + quiet zones'],
    highlight: 'Perfect for visiting founders, fractional teams, and trial runs.',
    signUpUrl: URLS.dayPass,
  },
  {
    name: 'Coworking Membership',
    price: '$382',
    cadence: 'per month',
    intro: 'Everything in the Day Pass plus full-time momentum.',
    features: ['24/7 access with smart entry', 'Conference room credits directly in your membership app', 'Priority invites to founder salons + community events', 'Flexible seating across focus zones and lounges'],
    highlight: 'Your baseline for being part of the Convivia builder community.',
    signUpUrl: URLS.cowork,
  },
  {
    name: 'Dedicated Desk Membership',
    price: '$450',
    cadence: 'per month',
    intro: 'The Coworking Membership plus a desk you can truly make your own.',
    features: ['Select and personalize your workstation', 'Lockable storage cabinet', 'Additional conference room credits', 'Keep gear, monitors, and peripherals in place'],
    highlight: 'Ideal for creators who want permanence without sacrificing community.',
    signUpUrl: URLS.dedicated,
  },
  {
    name: 'Custom Team Suite',
    price: 'Custom',
    cadence: 'per team',
    intro: 'Private studios for teams of 2–12 with full access to the shared ecosystem.',
    features: ['Dedicated office with natural light + private storage', 'Additional conference room allotments', 'Closed-door focus plus access to open coworking zones', 'Concierge support for IT, guests, and workshops'],
    highlight: 'Scale-ups, agencies, and distributed teams get a branded home base.',
    signUpUrl: URLS.contact,
    learnMoreUrl: '/suites',
  },
  {
    name: 'Mail Service for Members',
    price: '$50',
    cadence: 'per month',
    intro: 'Add a professional business address to your Convivia membership.',
    features: ['Walnut Creek business address at 1485 Treat Blvd.', 'Mail and package receiving on your behalf', 'Notifications when mail or packages arrive', 'Secure holding until you pick up', 'Mail forwarding available for $25/month + postage'],
    highlight: 'USPS Form 1583 authorization is required before service begins.',
    signUpUrl: URLS.mailMember,
    signUpOnly: true,
  },
  {
    name: 'Mail Service for Non-Members',
    price: '$99',
    cadence: 'per month',
    intro: 'A professional business address without a desk, ideal for remote and home-based businesses.',
    features: ['Walnut Creek business address at 1485 Treat Blvd.', 'Mail and package receiving on your behalf', 'Notifications when mail or packages arrive', 'Secure holding until you pick up', 'One-time $25 setup fee', 'Mail forwarding available for $25/month + postage'],
    highlight: 'USPS Form 1583 authorization is required before service begins.',
    signUpUrl: URLS.mailNonMember,
    signUpOnly: true,
  },
]

export default function MembershipPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-8">
        <div>
          <h1 className="font-display text-6xl text-[#0c0c0c]">Choose how you plug into Convivia Work.</h1>
          <p className="mt-4 max-w-2xl text-black/70">
            Every plan is powered by our mobile app for seamless billing, booking, and access control. Start with a day pass or jump straight into a membership—
            we'll tailor the onboarding, credentials, and workspace tour to your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-3xl border border-black/5 bg-[#f5f0eb] p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">{tier.cadence}</p>
                  <h2 className="text-2xl font-bold text-[#0c0c0c]">{tier.name}</h2>
                </div>
                <p className="text-3xl font-bold text-[#0c0c0c]">{tier.price}</p>
              </div>
              <p className="mt-4 text-black/70">{tier.intro}</p>
              <ul className="mt-4 space-y-2 text-black/70">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#fe904d]" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-black/60">{tier.highlight}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {!tier.signUpOnly && (
                  <Link href={URLS.tour} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 py-2 text-sm`}>
                    Book a tour
                  </Link>
                )}
                <Link href={tier.signUpUrl} target="_blank" rel="noopener noreferrer" className={`${buttonBase} px-4 py-2 text-sm`}>
                  Sign Up
                </Link>
                {tier.learnMoreUrl && (
                  <Link href={tier.learnMoreUrl} className={`${buttonBase} px-4 py-2 text-sm`}>
                    View suites
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
