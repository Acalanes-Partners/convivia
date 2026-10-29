import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Photos of Convivia Work in Walnut Creek, CA: coworking areas, private offices, conference rooms, kitchen, and the AV production studio.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children
}
