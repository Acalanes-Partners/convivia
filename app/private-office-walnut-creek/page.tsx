import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Private Office Memberships in Walnut Creek, CA – From $1,480/Month',
  description:
    'Private office memberships in Walnut Creek from $1,480/month. A closed-door office with natural light and storage, plus coworking lounges, kitchen, conference rooms, and fast internet. Near Pleasant Hill BART.',
  alternates: { canonical: '/private-office-walnut-creek' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  contact: 'https://conviviawork.coworksapp.com/membership-request/716',
}

export default function PrivateOfficePage() {
  return (
    <LandingPage
      heading="Private office memberships in Walnut Creek."
      intro="A private office membership gives you a closed-door office of your own, starting at $1,480 per month. Close the door for client calls and focused work, then step out to a kitchen, lounges, and conference rooms you don't have to manage. Convivia Work is at 1485 Treat Blvd., walkable to Pleasant Hill BART."
      image={{ src: '/assets/suites/corner-office.jpg', alt: 'Corner private office with lounge seating and two walls of windows' }}
      ctas={[
        { label: 'Book a Tour', href: URLS.tour },
        { label: 'Ask About Availability', href: URLS.contact },
      ]}
      sections={[
        {
          heading: 'Your office',
          bullets: [
            'Private, closed-door office with natural light',
            'Private storage',
            'Offices for individuals, with larger suites for teams up to 12',
            'Multigigabit internet with 5G failover',
          ],
        },
        {
          heading: 'Everything around it',
          bullets: [
            'Conference room time with 4K displays and video conferencing',
            'Coffee, full kitchen, lounges, and phone booths',
            'Concierge support for IT, guests, and workshops',
            'Business address and mail service available as a $50/month add-on',
            'Monthly community and networking events',
          ],
        },
        {
          heading: 'Membership pricing',
          body: 'Private office memberships start at $1,480 per month. Pricing depends on the size of the office and the number of people. Book a tour and we will walk you through what is available now.',
        },
        {
          heading: 'Who our office members are',
          bullets: [
            'Consultants, advisors, and solo professionals who meet clients',
            'Founders who have outgrown the kitchen table',
            'Small businesses that want a professional Walnut Creek address',
          ],
        },
      ]}
      faqs={[
        {
          q: 'How much is a private office membership in Walnut Creek?',
          a: 'Private office memberships at Convivia Work start at $1,480 per month. The price depends on the office size and how many people will use it.',
        },
        {
          q: 'What is included with a private office membership?',
          a: 'A closed-door office with natural light and private storage, multigigabit internet, conference room time, coffee and kitchen access, lounges, phone booths, and community events.',
        },
        {
          q: 'Can I meet clients at my office?',
          a: 'Yes. Guests are welcome, and you can book any of our four conference rooms, including the Executive Boardroom, for client meetings.',
        },
        {
          q: 'Where is the office located?',
          a: '1485 Treat Blvd., Walnut Creek, CA 94597. Walkable to Pleasant Hill / Contra Costa Centre BART and half a mile from Highway 680, with parking on a first come, first served basis.',
        },
        {
          q: 'How do I see what offices are available?',
          a: 'Book a tour online and our team will show you the offices that are open now.',
        },
      ]}
      related={[
        { label: 'All offices & suites', href: '/suites' },
        { label: 'Team office space', href: '/team-office-space' },
        { label: 'Membership vs. traditional lease', href: '/office-membership-vs-lease' },
      ]}
    />
  )
}
