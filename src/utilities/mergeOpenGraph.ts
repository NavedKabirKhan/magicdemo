import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
  siteName: 'Magic Table | Social Dining Experiences with Strangers',
  title: 'Magic Table | Social Dining Experiences with Strangers',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
