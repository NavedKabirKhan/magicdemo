import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Geist, Geist_Mono, Anek_Latin, Manrope } from 'next/font/google'

import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import Footer from './components/Footer/Footer'
import FooterMobile from './components/Footer/FooterMobile'
import Header from './components/Header/Header'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { ReactLenis } from 'lenis/react'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
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

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <ReactLenis root options={{ lerp: 0.5, duration: 1.5 }}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${anekLatin.variable} ${manrope.variable}`}
        >
          {' '}
          <Providers>
            <AdminBar
              adminBarProps={{
                preview: isEnabled,
              }}
            />

            <Header />

            {children}
            <Footer />
            <FooterMobile />
          </Providers>
        </body>
      </ReactLenis>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Magic Table | Social Dining Experiences with Strangers',
    template: '%s | Magic Table',
  },
  description:
    'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
  keywords: [
    'social dining, dinner with strangers, Bangalore dining events, meet new people, Saturday dinners, community events, curated dinners, Magic Table app, surprise restaurants, social meetups, make friends in Bangalore, weekend plans, offline social networking, dinner subscription, real conversations, dining experience, young professionals networking, fun weekend activities, no dating apps, authentic connections, group dinners, connect over food',
  ],
  authors: [{ name: 'Magic Table', url: 'https://www.magictable.in' }],
  creator: 'Magic Table',
  category: 'Social Dining',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    ...mergeOpenGraph(),
    title: 'Magic Table | Social Dining Experiences with Strangers',
    description:
      'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
    url: getServerSideURL(),
    siteName: 'Magic Table | Social Dining Experiences with Strangers',
    images: [
      {
        url: `${getServerSideURL()}/website-template-OG.webp`,
        width: 1200,
        height: 630,
        alt: 'Magic Table',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@magictable',
    title: 'Magic Table | Social Dining Experiences with Strangers',
    description:
      'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
    images: [`${getServerSideURL()}/website-template-OG.webp`],
  },
}
