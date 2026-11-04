import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Office Space for Small Teams in Walnut Creek, CA',
  description:
    'Private team suite memberships for 2–12 people in Walnut Creek, from $1,480/month. Get started without a build-out: internet, conference rooms, kitchen, and guest support included.',
  alternates: { canonical: '/team-office-space' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  contact: 'https://conviviawork.coworksapp.com/membership-request/716',
}

export default function TeamOfficeSpacePage() {
  return (
    <LandingPage
      heading="Office space for small teams."
      intro="Give your team of 2 to 12 a private suite of its own in Walnut Creek, with conference rooms, a kitchen, fast internet, and front-desk support already in place. Memberships start at $1,480 per month."
      image={{ src: '/assets/suites/team-suite.jpg', alt: 'Team suite with seven desks and two TV screens' }}
      ctas={[
        { label: 'Book a Tour', href: URLS.tour },
        { label: 'Talk to Our Team', href: URLS.contact },
      ]}
      sections={[
        {
          heading: 'A private home base',
          bullets: [
            'Closed-door suites for teams of 2 to 12',
            'Natural light and private storage',
            'Suites with room for desks and wall-mounted displays',
            'Access to open coworking areas when you want a change of scene',
          ],
        },
        {
          heading: 'Included, not extra',
          bullets: [
            'Multigigabit internet with 5G failover',
            'Additional conference room time for team meetings and clients',
            'Coffee, full kitchen, and lounges',
            'Concierge support for IT, guests, and workshops',
          ],
        },
        {
          heading: 'Room to grow',
          body: 'As your team grows, change to a larger suite membership in the same building instead of searching for new office space. Mail and package service is available as an add-on for $50/month.',
        },
        {
          heading: 'Built for',
          bullets: [
            'Agencies and studios',
            'Startups and scale-ups',
            'Professional services firms',
            'Distributed companies that want an East Bay hub',
          ],
        },
      ]}
      faqs={[
        {
          q: 'How much does office space for a small team cost in Walnut Creek?',
          a: 'Private office and team suite memberships at Convivia Work start at $1,480 per month. Pricing depends on the size of the suite and the number of people.',
        },
        {
          q: 'How many people can a team suite hold?',
          a: 'Suites are available for teams of 2 to 12 people, including a suite with seven desks and two displays.',
        },
        {
          q: 'Do we need to set up internet or furniture?',
          a: 'Multigigabit internet with 5G failover is already in place, along with conference rooms, a kitchen, and shared lounges. Book a tour to see how each suite is set up.',
        },
        {
          q: 'Can we hold team meetings and client meetings?',
          a: 'Yes. Suites include additional conference room time, and the building has four conference rooms with 4K displays and video conferencing, from a four-person room to The Stack for larger groups.',
        },
        {
          q: 'What if our team grows?',
          a: 'You can change to a larger suite membership in the same building as your team grows.',
        },
      ]}
      related={[
        { label: 'All offices & suites', href: '/suites' },
        { label: 'Private office memberships', href: '/private-office-walnut-creek' },
        { label: 'East Bay hub for remote teams', href: '/satellite-office' },
      ]}
    />
  )
}
