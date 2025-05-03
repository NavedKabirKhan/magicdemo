import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import aboutStyles from '../../ComesInMobile.module.css' // Update this path based on your folder

const EmblaCarousel = ({ cards, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  // const onNavButtonClick = useCallback((emblaApi) => {
  //   const autoplay = emblaApi?.plugins()?.autoplay
  //   if (!autoplay) return

  //   const resetOrStop =
  //     autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop

  //   resetOrStop()
  // }, [])
  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)

  return (
    <>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {cards.map((CardContent, index) => (
              <div className="embla__slide" key={index}>
                <div className={`${aboutStyles.card} ${aboutStyles[CardContent.className]}`}>
                  <div className={aboutStyles.cardText}>
                    <div className={aboutStyles.cardHeading}>
                      <h2>{CardContent.heading}</h2>
                    </div>
                    <div className={aboutStyles.cardDescription}>
                      <span>{CardContent.description}</span>
                    </div>
                  </div>
                  <div className={aboutStyles.cardImage}>
                    {CardContent.video ? (
                      <video
                        width="274px"
                        height="280.52px"
                        playsInline
                        loop
                        autoPlay
                        muted
                        preload="auto" // Add this for better loading
                        src={CardContent.video}
                        alt={`Slide ${index + 1}`}
                      />
                    ) : (
                      <img src={CardContent.image} alt={`Slide ${index + 1}`}  width="200px"
                      height="200.52px" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EmblaCarousel
