import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'East Bay Satellite Office for Remote & Hybrid Teams',
  description:
    'Give East Bay employees an office near home. Private team suites in Walnut Creek near Pleasant Hill BART and Highway 680, from $1,480/month, with conference rooms and video conferencing.',
  alternates: { canonical: '/satellite-office' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  contact: 'https://conviviawork.coworksapp.com/membership-request/716',
}

export default function SatelliteOfficePage() {
  return (
    <LandingPage
      heading="An East Bay hub for your remote team."
      intro="If some of your employees live in Contra Costa County, a private suite at Convivia Work gives them a professional place to work without the commute to San Francisco or Oakland. Walnut Creek, next to Pleasant Hill BART and Highway 680."
      image={{ src: '/assets/suites/five-person-suite.jpg', alt: 'Five-person suite with windows and standing desks' }}
      ctas={[
        { label: 'Talk to Our Team', href: URLS.contact },
        { label: 'Book a Tour', href: URLS.tour },
      ]}
      sections={[
        {
          heading: 'Why companies add an East Bay hub',
          bullets: [
            'Shorter commutes for employees in Walnut Creek, Concord, Lafayette, Danville, and nearby',
            'A real place for hybrid teams to meet in person',
            'A professional setting for local client meetings',
            'No long build-out or office setup to manage',
          ],
        },
        {
          heading: 'Set up for hybrid work',
          bullets: [
            'Conference rooms with 4K displays and video conferencing',
            'Multigigabit internet with 5G failover',
            'Phone booths for private calls',
            'Concierge support for IT and guests',
          ],
        },
        {
          heading: 'Options for every team size',
          bullets: [
            'Private team suite memberships from $1,480/month',
            'Coworking memberships at $382/month for occasional in-office days',
            'Day passes at $50/day for visitors',
          ],
        },
        {
          heading: 'Getting here',
          body: '1485 Treat Blvd., Walnut Creek, CA 94597. Walkable to Pleasant Hill / Contra Costa Centre BART and half a mile from Highway 680, with parking on a first come, first served basis.',
        },
      ]}
      faqs={[
        {
          q: 'Can our company have a satellite office in the East Bay?',
          a: 'Yes. Convivia Work in Walnut Creek offers private team suites for 2 to 12 people, starting at $1,480 per month, with conference rooms and video conferencing included.',
        },
        {
          q: 'Can we mix private suites and coworking memberships?',
          a: 'Yes. You can have a private suite membership for regular staff and add $382/month coworking memberships or $50 day passes for people who come in occasionally.',
        },
        {
          q: 'Is it close to BART?',
          a: 'Yes. Convivia Work is walkable from Pleasant Hill / Contra Costa Centre BART, one stop from Concord and two from Lafayette.',
        },
        {
          q: 'How do we get started?',
          a: 'Contact our team or book a tour. We will show you the suites available and help you choose the right mix for your team.',
        },
      ]}
      related={[
        { label: 'Team office space', href: '/team-office-space' },
        { label: 'All offices & suites', href: '/suites' },
        { label: 'East Bay coworking', href: '/east-bay-coworking' },
      ]}
    />
  )
}
