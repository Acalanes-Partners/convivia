import Image from 'next/image'
import Link from 'next/link'
import { buttonBase } from '@/lib/theme'

const BOOK_URL = 'https://conviviawork.coworksapp.com/book/716'

const rooms = [
  {
    name: 'The Stack',
    image: '/assets/conference-rooms/the-stack.jpg',
    description:
      'The Stack, a spacious meeting area, can accommodate larger groups. Perfect for networking and educational meetings.',
  },
  {
    name: 'Executive Boardroom',
    image: '/assets/conference-rooms/executive-boardroom.png',
    description:
      'An executive boardroom for fast-moving teams. Features flexible seating, writable whiteboard wall, a 4K large format display that makes quick pivots and working sessions effortless.',
  },
  {
    name: 'Small Meeting Room',
    image: '/assets/conference-rooms/small-meeting-room.jpg',
    description:
      'Designed for deep discovery calls and client briefings. This four person executive space creates a focused environment for sharing and decision making.',
  },
  {
    name: 'Stand Up Meeting Room',
    image: '/assets/conference-rooms/standup-meeting-room.jpg',
    description:
      'Where teams are energized by working around a high top table with barstool seating set up with a 4K display and glass writing board for hybrid teams to join the fun.',
  },
]

export default function ConferenceRoomsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-10">
        <div className="space-y-4">
          <h1 className="font-display text-6xl text-[#0c0c0c]">Spaces that honor how you collaborate.</h1>
          <p className="text-black/70">
            Each room is fully equipped with 4K large-format displays, studio-grade audio,
            and plug-and-play video conferencing so hybrid meetings feel natural.
            Book time using the links below and we'll prep whiteboards or analog tools to match your agenda.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <div key={room.name} className="rounded-3xl border border-black/5 bg-[#f5f0eb] overflow-hidden shadow-sm">
              {/* Room photo */}
              <div className="relative h-56 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Room details */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#0c0c0c]">{room.name}</h2>
                <p className="mt-3 text-black/70">{room.description}</p>
                <ul className="mt-4 space-y-2 text-black/70 text-sm">
                  <li>• Fully set up for video conferencing</li>
                  <li>• 4K display for screen sharing & presentations</li>
                  <li>• Whiteboards available on request</li>
                </ul>
                <Link
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} mt-6 px-5 py-2 text-sm`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
