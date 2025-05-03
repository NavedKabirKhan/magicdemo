'use client'
import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import aboutStyles from './comesin.module.css'
import bookSeat from './bookSeat.svg'
import Link from 'next/link'
gsap.registerPlugin(ScrollTrigger)
function ComesIn() {
  const componentRef = useRef()
  const sectionRef = useRef(null)
  const containerRef = useRef()
  const overlayRef = useRef()
  const headingRef = useRef([])
  const cardsRef = useRef([])
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const screenWidth = window.innerWidth
      gsap.set(headingRef.current, { opacity: 0, y: '100%' })
      cardsRef.current.forEach((card, i) => {
        const offset = 60 + i * 100
        gsap.set(card, { opacity: 0, y: offset })
      })
      gsap.set(overlayRef.current, { y: '100%', opacity: 1 })
      const disableScroll = () => {
        document.body.style.overflow = 'hidden'
      }
      const enableScroll = () => {
        document.body.style.overflow = ''
      }
      // When user reaches section, lock scroll instantly
      ScrollTrigger.create({
        trigger: componentRef.current,
        start: 'top 85%',
        onEnter: () => {
          disableScroll()
          const tl = gsap.timeline({
            onComplete: enableScroll // Unlock when timeline finishes
          })
          // Overlay in
          tl.to(overlayRef.current, {
            y: '0%',
            duration: 0.5,
            ease: 'power2.inOut',
          })
          // Overlay out
          tl.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
            ease: 'power1.out',
            onComplete: () => {
              overlayRef.current.style.display = 'none'
            },
          })
          // Heading mask-up
          tl.to(
            headingRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.15,
            }
          )
          // Cards animate at same time as heading
          tl.to(
            cardsRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.1,
            },
            '<'
          )
        }
      })
      if (screenWidth > 960) {
        const container = containerRef.current
        gsap.to(container, {
          x: () => -(container.scrollWidth - screenWidth / 1.5),
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: componentRef.current,
            pin: true,
            start: 'top 10%',
            scrub: 0.2,
            end: () => `+=${container.scrollWidth + 1.5}`,
            anticipatePin: 0,
            invalidateOnRefresh: true,
          },
        })
      }
    }, componentRef)
    return () => ctx.revert()
  }, [])
  return (
    <div className={aboutStyles.meetTheFounderWrapper} ref={componentRef}>
      <div className={aboutStyles.overlay} ref={overlayRef}></div>
      <div className={aboutStyles.containerHeading} ref={sectionRef}>
        <div className={aboutStyles.maskWrapper}>
          <h2 ref={(el) => (headingRef.current[0] = el)}>
            That’s Where <br />
            Magic Table Comes In
          </h2>
        </div>
      </div>
      <div className={aboutStyles.meetTheFounderContainer} ref={containerRef}>
        <div className={aboutStyles.panelFirst}>
          <div className={aboutStyles.meetTheFoundersHeading}>
            <div className={aboutStyles.meetTheFoundersDescription}>
              <div className={aboutStyles.cardOne} ref={(el) => (cardsRef.current[0] = el)}>
                <div className={aboutStyles.cardText}>
                  <div className={aboutStyles.cardHeading}><span>Every Saturday,</span></div>
                  <div className={aboutStyles.cardDescription}>
                    <span>we gather strangers for a laid-back dinner that's anything but ordinary.</span>
                  </div>
                </div>
                <div className={aboutStyles.cardImage}>
                  <video width="274px" height="280.52px" loop autoPlay muted playsInline>
                    <source src="/comesIn/cardOneAnim.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className={aboutStyles.cardTwo} ref={(el) => (cardsRef.current[1] = el)}>
                <div className={aboutStyles.cardText}>
                  <div className={aboutStyles.cardHeading}><span>No swiping, no profiles</span></div>
                  <div className={aboutStyles.cardDescription}>
                    <span>just real people, real stories, and a surprise restaurant.</span>
                  </div>
                </div>
                <div className={aboutStyles.cardImage}>
                  <video width="274px" height="280.52px" loop autoPlay muted playsInline>
                    <source src="/comesIn/cardTwoAnim.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className={aboutStyles.cardThree} ref={(el) => (cardsRef.current[2] = el)}>
                <div className={aboutStyles.cardText}>
                  <div className={aboutStyles.cardDescription}>
                    <span>It’s the easiest way to shake up your weekend, meet interesting people, and create new memories.</span>
                  </div>
                </div>
                <div className={aboutStyles.cardImage}>
                  <video width="274px" height="280.52px" loop autoPlay muted playsInline>
                    <source src="/comesIn/cardThreeAnim.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className={aboutStyles.cardFour} ref={(el) => (cardsRef.current[3] = el)}>
                <div className={aboutStyles.cardFourInner}>
                  <div className={aboutStyles.cardText}>
                    <div className={aboutStyles.cardDescription}>
                      <span>One meal could lead to a new friend - or at least a night worth remembering!</span>
                    </div>
                  </div>
                  <div className={aboutStyles.cardImage}>
                    <video width="274px" height="280.52px" loop autoPlay muted playsInline>
                      <source src="/comesIn/cardFourAnim.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <Link href="#Plans">
                  <Image src={bookSeat} alt="bookSeat" quality={100} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ComesIn