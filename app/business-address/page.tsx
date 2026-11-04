import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Business Address & Mail Service in Walnut Creek, CA',
  description:
    'Get a professional Walnut Creek business address at 1485 Treat Blvd. with mail and package receiving, arrival notifications, and forwarding. $99/month, or $50/month for members.',
  alternates: { canonical: '/business-address' },
}

const URLS = {
  mailNonMember: 'https://conviviawork.coworksapp.com/membership-signup/13315',
  mailMember:    'https://conviviawork.coworksapp.com/membership-signup/13314',
}

export default function BusinessAddressPage() {
  return (
    <LandingPage
      heading="A professional business address in Walnut Creek."
      intro="Run your business from home or on the road while using a real Walnut Creek street address: 1485 Treat Blvd. Convivia Work receives your mail and packages, notifies you when they arrive, and holds them securely or forwards them to you."
      image={{ src: '/assets/gallery/space-05.jpg', alt: 'Bright hallway and glass offices inside Convivia Work in Walnut Creek' }}
      ctas={[
        { label: 'Sign Up (Non-Members)', href: URLS.mailNonMember },
        { label: 'Sign Up (Members)', href: URLS.mailMember },
      ]}
      sections={[
        {
          heading: 'What you get',
          bullets: [
            'Walnut Creek business address at 1485 Treat Blvd., Walnut Creek, CA 94597',
            'Mail and package receiving on your behalf',
            'Notifications when mail or packages arrive',
            'Secure holding until you pick up',
            'Optional mail forwarding',
          ],
        },
        {
          heading: 'Pricing',
          bullets: [
            'Non-members: $99/month plus a one-time $25 setup fee',
            'Convivia Work members: $50/month',
            'Mail forwarding: $25/month plus postage',
          ],
        },
        {
          heading: 'Who it is for',
          bullets: [
            'Home-based businesses that want to keep a home address private',
            'Remote founders and consultants who need a local presence',
            'Small businesses that want a reliable place to receive packages',
          ],
        },
        {
          heading: 'Getting started',
          body: 'Sign up online, then complete USPS Form 1583, which authorizes Convivia Work to receive mail on your behalf. Service begins once the form is complete.',
        },
      ]}
      faqs={[
        {
          q: 'How much does a business address in Walnut Creek cost?',
          a: 'Mail service at Convivia Work is $99/month plus a one-time $25 setup fee for non-members, or $50/month for Convivia Work members. Mail forwarding is $25/month plus postage.',
        },
        {
          q: 'Is this a real street address?',
          a: 'Yes. Your mail is received at 1485 Treat Blvd., Walnut Creek, CA 94597, a staffed coworking space.',
        },
        {
          q: 'Can you receive packages?',
          a: 'Yes. We receive mail and packages on your behalf, notify you when they arrive, and hold them securely until you pick up.',
        },
        {
          q: 'Do I need to be a coworking member?',
          a: 'No. Non-members can get mail service on its own. Members get a lower monthly rate.',
        },
        {
          q: 'What paperwork is required?',
          a: 'USPS Form 1583 is required before service begins. It authorizes Convivia Work to receive mail for you.',
        },
      ]}
      related={[
        { label: 'Memberships & pricing', href: '/membership' },
        { label: 'Day pass', href: '/day-pass' },
        { label: 'FAQ', href: '/faq' },
      ]}
    />
  )
}
