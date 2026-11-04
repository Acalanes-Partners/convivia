import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Day Pass Coworking in Walnut Creek, CA – $50/Day',
  description:
    'Drop-in coworking in Walnut Creek for $50 a day: adjustable standing desk, monitor, fast WiFi, coffee, kitchen, and phone booths. Near Pleasant Hill BART. No membership required.',
  alternates: { canonical: '/day-pass' },
}

const URLS = {
  dayPass: 'https://conviviawork.coworksapp.com/day-pass-signup/716?plan=11611',
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
}

export default function DayPassPage() {
  return (
    <LandingPage
      heading="Day pass coworking in Walnut Creek."
      intro="Need a productive place to work for a day? A Convivia Work Day Pass is $50 and gets you an adjustable standing desk with a monitor, fast and reliable WiFi, coffee, kitchen access, and phone booths. No membership or long-term commitment required."
      image={{ src: '/assets/office/office-08.jpg', alt: 'Open coworking area with standing desks and monitors at Convivia Work' }}
      ctas={[
        { label: 'Buy a Day Pass', href: URLS.dayPass },
        { label: 'Book a Tour', href: URLS.tour },
      ]}
      sections={[
        {
          heading: "What's included for $50",
          bullets: [
            'Adjustable standing desk and ergonomic seating',
            'External monitor, laptop stand, and power',
            'Multigigabit WiFi with 5G failover',
            'Coffee and full kitchen access',
            'Phone booths and quiet zones for calls',
          ],
        },
        {
          heading: 'Who uses a day pass',
          bullets: [
            'Remote workers who need a break from working at home',
            'Visiting founders and business travelers in the East Bay',
            'Fractional and freelance professionals between client sites',
            'Anyone trying Convivia Work before choosing a membership',
          ],
        },
        {
          heading: 'Easy to get to',
          body: 'Convivia Work is at 1485 Treat Blvd. in Walnut Creek, walkable to Pleasant Hill / Contra Costa Centre BART and half a mile from Highway 680. Parking is available on a first come, first served basis.',
        },
        {
          heading: 'Ready to come back?',
          body: 'If you find yourself here more than a few days a month, the Coworking Membership is $382/month with 24/7 access, conference room credits, and community events. All memberships are month to month.',
        },
      ]}
      faqs={[
        {
          q: 'How much is a coworking day pass in Walnut Creek?',
          a: 'A Day Pass at Convivia Work is $50 per day and includes an adjustable standing desk, monitor, WiFi, coffee, kitchen access, and phone booths.',
        },
        {
          q: 'Do I need a membership to use a day pass?',
          a: 'No. Anyone can buy a Day Pass online with no membership or commitment.',
        },
        {
          q: 'What are the day pass hours?',
          a: 'Our team is onsite Monday–Friday, 9am–5pm Pacific. 24/7 keyless access is included with the Coworking Membership and above.',
        },
        {
          q: 'Is parking available?',
          a: 'Yes. Parking is available on a first come, first served basis, and the space is walkable from Pleasant Hill / Contra Costa Centre BART.',
        },
        {
          q: 'Can I bring a guest?',
          a: 'Guests are welcome in conference rooms as part of a booking. Outside of a conference room reservation, each guest needs their own Day Pass.',
        },
      ]}
      related={[
        { label: 'Memberships & pricing', href: '/membership' },
        { label: 'Conference rooms', href: '/conference-rooms' },
        { label: 'FAQ', href: '/faq' },
      ]}
    />
  )
}
