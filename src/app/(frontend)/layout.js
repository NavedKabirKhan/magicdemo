import { Geist, Geist_Mono, Anek_Latin } from 'next/font/google'
import './globals.css'
import { ReactLenis } from 'lenis/react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const anekLatin = Anek_Latin({
  variable: '--font-anek-latin',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Magic Table | Social Dining Experiences with Strangers',
  description:
    'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
  keywords:
    'social dining, dinner with strangers, Bangalore dining events, meet new people, Saturday dinners, community events, curated dinners, Magic Table app, surprise restaurants, social meetups, make friends in Bangalore, weekend plans, offline social networking, dinner subscription, real conversations, dining experience, young professionals networking, fun weekend activities, no dating apps, authentic connections, group dinners, connect over food',
  openGraph: {
    title: 'Magic Table | Social Dining Experiences with Strangers',
    description:
      'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
    url: 'https://magictable.in',
    siteName: 'Magic Table | Social Dining Experiences with Strangers',
    images: [
      {
        url: 'https://magictable.in/assets/cover.png',
        width: 1200,
        height: 630,
        alt: 'Magic Table',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Table | Social Dining Experiences with Strangers',
    description:
      'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
    images: ['https://magictable.in/assets/cover.png'],
  },
  other: {
    'contact:email': 'hello@magictable.in',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root options={{ lerp: 0.5, duration: 1.5 }}>
        <body className={`${geistSans.variable} ${geistMono.variable} ${anekLatin.variable}`}>
          {children}
        </body>
      </ReactLenis>
    </html>
  )
}
