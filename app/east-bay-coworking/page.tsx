import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Coworking Near Pleasant Hill, Lafayette, Concord & Danville',
  description:
    'Convivia Work in Walnut Creek is a short drive or BART ride from Pleasant Hill, Concord, Lafayette, Danville, and Martinez. Day passes, memberships, private offices, and meeting rooms.',
  alternates: { canonical: '/east-bay-coworking' },
}

const URLS = {
  tour:    'https://conviviawork.coworksapp.com/tour-request/716',
  dayPass: 'https://conviviawork.coworksapp.com/day-pass-signup/716?plan=11611',
}

export default function EastBayCoworkingPage() {
  return (
    <LandingPage
      heading="Coworking for the central East Bay."
      intro="Convivia Work sits at 1485 Treat Blvd. in Walnut Creek, next to Pleasant Hill / Contra Costa Centre BART and half a mile from Highway 680. That makes it an easy commute from Pleasant Hill, Concord, Lafayette, Danville, Martinez, and the rest of Contra Costa County."
      image={{ src: '/assets/gallery/space-08.jpg', alt: 'Sunlit kitchen and lounge with skylights at Convivia Work' }}
      ctas={[
        { label: 'Book a Tour', href: URLS.tour },
        { label: 'Buy a Day Pass', href: URLS.dayPass },
      ]}
      sections={[
        {
          heading: 'Getting here',
          bullets: [
            'BART: walk from Pleasant Hill / Contra Costa Centre station',
            'Concord: one BART stop away',
            'Lafayette: two BART stops away',
            'Danville and San Ramon: straight up Highway 680',
            'Parking onsite, first come, first served',
          ],
        },
        {
          heading: 'Ways to work here',
          bullets: [
            'Day Pass: $50/day',
            'Coworking Membership: $382/month with 24/7 access',
            'Dedicated Desk: $450/month',
            'Private offices and team suites from $1,480/month',
            'Business address and mail service from $50/month',
          ],
        },
        {
          heading: 'Meet clients without the drive to San Francisco',
          body: 'Four bookable conference rooms with 4K displays and video conferencing, from the four-person Small Meeting Room to The Stack for larger groups and networking events.',
        },
        {
          heading: 'Create content close to home',
          body: 'Our AV production studio has a green screen, wood backdrop, cinema lighting, and acoustic treatment for podcasts, video, and livestreams.',
        },
      ]}
      faqs={[
        {
          q: 'Is there a coworking space near Pleasant Hill BART?',
          a: 'Yes. Convivia Work at 1485 Treat Blvd., Walnut Creek, is walkable from Pleasant Hill / Contra Costa Centre BART.',
        },
        {
          q: 'Is there coworking near Concord or Lafayette?',
          a: 'Convivia Work in Walnut Creek is one BART stop from Concord and two stops from Lafayette, and a short drive from both.',
        },
        {
          q: 'Is there coworking near Danville or San Ramon?',
          a: 'Convivia Work is a short drive north on Highway 680, half a mile from the freeway, with parking available on a first come, first served basis.',
        },
        {
          q: 'How much does coworking cost?',
          a: 'A Day Pass is $50/day, the Coworking Membership is $382/month, and the Dedicated Desk Membership is $450/month. Private offices start at $1,480/month. All memberships are month to month.',
        },
      ]}
      related={[
        { label: 'Memberships & pricing', href: '/membership' },
        { label: 'Private suites', href: '/suites' },
        { label: 'Conference rooms', href: '/conference-rooms' },
        { label: 'AV studio', href: '/av-studio' },
      ]}
    />
  )
}
