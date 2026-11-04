import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Private Office Membership vs. Traditional Office Lease',
  description:
    'A private office membership at Convivia Work in Walnut Creek is not a lease. Compare membership with a traditional office lease: commitment, upfront costs, setup, and what is included. Memberships from $1,480/month.',
  alternates: { canonical: '/office-membership-vs-lease' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  contact: 'https://conviviawork.coworksapp.com/membership-request/716',
}

export default function OfficeMembershipVsLeasePage() {
  return (
    <LandingPage
      heading="An office membership, not a lease."
      intro="Small businesses looking for office space in Walnut Creek often assume the only option is a commercial lease. A private office membership at Convivia Work works differently: you join as a member and get a private office plus the whole workspace around it. It is a membership, not a lease."
      image={{ src: '/assets/suites/three-person-suite.jpg', alt: 'Three-person private office with standing desks' }}
      ctas={[
        { label: 'Book a Tour', href: URLS.tour },
        { label: 'Talk to Our Team', href: URLS.contact },
      ]}
      sections={[
        {
          heading: 'Traditional office lease',
          bullets: [
            'Multi-year commitment is common',
            'Security deposit, build-out, and furniture costs before move-in',
            'You arrange internet, utilities, cleaning, and maintenance',
            'Conference room and kitchen take up space you pay for every day',
            'Outgrowing the space can mean breaking a lease or finding a sublessee',
          ],
        },
        {
          heading: 'Private office membership at Convivia Work',
          bullets: [
            'A membership, not a lease',
            'Private office memberships from $1,480 per month',
            'Your office is ready to use from your first day',
            'Multigigabit internet with 5G failover already running',
            'Four shared conference rooms, kitchen, lounges, and phone booths',
            'Change to a larger office or suite membership as your team grows',
          ],
        },
        {
          heading: 'When a traditional lease makes sense',
          body: 'If you need a large, fully custom space, a storefront, or specialized equipment that cannot share a building, a traditional lease may be the better fit.',
        },
        {
          heading: 'When a membership makes sense',
          body: 'If your team is 1 to 12 people, you want to get started quickly, and you would rather spend on your business than on furniture, internet, and conference rooms, a private office membership is usually simpler and more predictable.',
        },
      ]}
      faqs={[
        {
          q: 'Is a private office membership a lease?',
          a: 'No. A private office at Convivia Work is a membership, not a lease. Members get the use of a private office along with shared conference rooms, kitchen, lounges, and internet.',
        },
        {
          q: 'Is a private office membership less expensive than leasing office space?',
          a: 'For teams of 1 to 12, often yes once you count the full cost of a lease: deposit, build-out, furniture, internet, utilities, and a conference room. Private office memberships at Convivia Work start at $1,480 per month with internet, shared conference rooms, and a kitchen already in place.',
        },
        {
          q: 'How quickly can we get started?',
          a: 'Offices are ready to use with internet already running, so there is no construction to wait for. Book a tour to see which offices are available now.',
        },
        {
          q: 'Can we still meet clients professionally?',
          a: 'Yes. Members can book four conference rooms with 4K displays and video conferencing, including an Executive Boardroom. Business address and mail service is available as an add-on.',
        },
        {
          q: 'What happens if our team grows?',
          a: 'You can change to a larger office or suite membership in the same building, for teams of up to 12.',
        },
      ]}
      related={[
        { label: 'Private office memberships', href: '/private-office-walnut-creek' },
        { label: 'Team office space', href: '/team-office-space' },
        { label: 'All offices & suites', href: '/suites' },
      ]}
    />
  )
}
