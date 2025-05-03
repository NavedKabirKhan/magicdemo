import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../css/embla.css'


const cards = [
  {
    heading: 'Every Saturday,',
    description: "we gather strangers for a laid-back dinner that's anything but ordinary.",
    // video: '/comesIn/cardOneAnim.mp4',
    image: '/comesIn/cardOneAnim.gif',

    className: 'cardOne'
  },
  {
    heading: 'No phones,',
    description: 'just real conversations with real people.',
    // video: '/comesIn/cardTwoAnim.mp4',
    image: '/comesIn/cardTwoAnim.gif',

    className: 'cardTwo'
  },
  {
    heading: 'Limited seats,',
    description: 'unlimited stories. Book your table now.',
    // video: '/comesIn/cardThreeAnim.mp4',
    image: '/comesIn/cardThreeAnim.gif',

    className: 'cardThree'
  },
  {
    heading: 'Curated vibes,',
    description: 'and strangers that don’t feel like strangers by the end.',
    // video: '/comesIn/cardFourAnim.gif',
    image: '/comesIn/cardFourAnim.gif',
    className: 'cardFour'
  }
]


const OPTIONS = { align: 'start', containScroll: false }

const ComesInCarousel = () => (
  <>
    <EmblaCarousel cards={cards} options={OPTIONS} />
  </>
)

export default ComesInCarousel
