'use client'
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import aboutStyles from './process.module.css' // Import your styles
import bitmoji from '../../components/horizontalScroll/bitmoji.png'
import camera from '../../components/horizontalScroll/camera.gif'
import stickers from '../../components/horizontalScroll/stickers.svg'

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function ProcessScroll() {
  const componentRef = useRef()
  const containerRef = useRef()

  useLayoutEffect(() => {
    // Create a GSAP context for cleanup and scoping
    const ctx = gsap.context(() => {
      const screenWidth = window.innerWidth
      const container = containerRef.current;

      if (screenWidth > 960) {
        const container = containerRef.current

        gsap.to(container, {
          x: () => -(container.scrollWidth - screenWidth / 1.25), // Adjust scroll amount as needed
          ease: 'linear',
          scrollTrigger: {
            trigger: componentRef.current,
            pin: true,
            start: 'top top',
            scrub: 0.1,
            end: () => `+=${container.scrollWidth + 1.5}`,
            anticipatePin: 0,
            invalidateOnRefresh: true,
          },
        })
      }
      else if (screenWidth >= 320 && screenWidth <= 1440) {
        gsap.to(container, {
          x: () => -(container.scrollWidth - screenWidth / 1.2),
          ease: "linear",
          scrollTrigger: {
            trigger: componentRef.current,
            pin: true,
            start: "top top",
            scrub: 0.1,
            end: () => `+=${container.scrollWidth + 3}`,
            anticipatePin: 0,
            invalidateOnRefresh: true,
          },
        });
      }
    }, componentRef) // Attach context to the component reference

    return () => ctx.revert()
  }, [])

  return (
    <div className={aboutStyles.meetTheFounderWrapper} ref={componentRef} id="discover">
      <div className={aboutStyles.meetTheFounderContainer} ref={containerRef}>
        {/* Heading */}
        <div className={aboutStyles.panelFirst}>
          <div className={aboutStyles.meetTheFoundersHeading}>
            <p>Lost in Same</p>
            <div className={aboutStyles.meetTheFoundersDescription}>
              <h2>Weekend</h2>
              <div className={aboutStyles.bitmojiImage}>
                <Image src={bitmoji} width={174} height={174} alt="bitmoji" quality={100} />
              </div>
              {/* <p>
                It’s natural to crave a change, a chance to break free and meet someone new. As we
                grow, making new connections feels harder -tight schedules, familiar circles, and
                fewer chances for unexpected conversations.
              </p> */}
              <div className={aboutStyles.stickers}>
                <Image src={stickers} width={306.44} height={187.24} alt="stickers" quality={100} />
              </div>
              <h2>Loop?</h2>
              <div className={aboutStyles.cameraImage}>
                <Image src={camera} width={99} height={99} alt="camera" quality={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessScroll
