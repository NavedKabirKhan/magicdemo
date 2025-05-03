'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './MagicStepsMobile.module.css'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IphoneScreen1 from '../../Assets/MagicSteps/iPhone1.png'
import IphoneScreen2 from '../../Assets/MagicSteps/iPhone2.png'
import IphoneScreen3 from '../../Assets/MagicSteps/iPhone3.png'
import IphoneScreen4 from '../../Assets/MagicSteps/iPhone4.png'
import IphoneScreen5 from '../../Assets/MagicSteps/iPhone5.png'
import PersonOne from '../../Assets/MagicStepsMobile/personOne.svg'
import PersonTwo from '../../Assets/MagicStepsMobile/personTwo.svg'
import PersonThree from '../../Assets/MagicStepsMobile/PersonThree.svg'
import PersonFour from '../../Assets/MagicStepsMobile/personFour.svg'
import PersonFive from '../../Assets/MagicStepsMobile/personFive.svg'
import LoveEyesEmojiGif from '../../Assets/MagicSteps/loveEyesEmoji.gif'
import HandByeEmojiGif from '../../Assets/MagicSteps/handByeEmoji.gif'
import CameraEmojiGif from '../../Assets/MagicSteps/cameraClickEmoji.gif'
import CelebarteEmojiGif from '../../Assets/MagicSteps/celebrateEmoji.gif'
import StarsEmojiGif from '../../Assets/MagicSteps/starsEmoji.gif'
gsap.registerPlugin(ScrollTrigger)
const steps = [
  {
    step: 'Step 1',
    title: 'Sign Up',
    description:
      'Download the Magic Table app & answer 8 quick questions - we’ll match you with the perfect group.',
    image: PersonOne,
    emoji: StarsEmojiGif,
    iphoneScreen: IphoneScreen1,
  },
  {
    step: 'Step 2',
    title: 'Pick Your Spot',
    description:
      'Pick a Saturday, book a single dinner or a subscription, and get matched with 5-6 like minded strangers.',
    image: PersonTwo,
    emoji: CameraEmojiGif,
    iphoneScreen: IphoneScreen2,
  },
  {
    step: 'Step 3',
    title: 'Book Your Seat',
    description:
      'Select your city and choose a preferred locality to dine in - whether it’s near home or somewhere new.',
    image: PersonThree,
    emoji: CelebarteEmojiGif,
    iphoneScreen: IphoneScreen3,
  },
  {
    step: 'Step 4',
    title: 'Show Up',
    description:
      'On the day, the restaurant is revealed - just show up, meet your group, and enjoy the conversation.',
    image: PersonFour,
    emoji: HandByeEmojiGif,
    iphoneScreen: IphoneScreen4,
  },
  {
    step: 'Step 5',
    title: 'Rate It',
    description:
      'After dinner, rate your group from 1-10 in the app. Your feedback helps us fine-tune your future dinners.',
    image: PersonFive,
    emoji: LoveEyesEmojiGif,
    iphoneScreen: IphoneScreen5,
  },
]
const MagicStepsMobile = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const headingTextRef = useRef(null)
  const iphoneRef = useRef(null)
  const emojiRef = useRef(null)
  const cardRef = useRef(null)
  const stepNumberRef = useRef(null)
  const stepTitleRef = useRef(null)
  const personImageRef = useRef(null)
  const descriptionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingTextRef.current,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: '+=300',

            once: true,
          },
        },
      )
      gsap.fromTo(
        headingRef.current,
        { y: '0%', opacity: 1 },
        {
          y: '-100%',
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=300',
            scrub: true,
          },
        },
      )
      gsap.to(iphoneRef.current, {
        y: '0%',
        ease: 'none',
        scrollTrigger: {
          // markers:true,
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300',
          scrub: true,
        },
      })
      gsap.to(emojiRef.current, {
        y: '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300',
          scrub: true,
        },
      })
      gsap.fromTo(
        cardRef.current,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top+=200 top',
            end: '+=300',
            scrub: true,
          },
        },
      )
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top -15%',
        // markers: true,
        end: '+=2500',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const newIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length))
          setActiveStep(newIndex)
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    const fadeOut = gsap.to([stepNumberRef.current, stepTitleRef.current, personImageRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
    const fadeIn = gsap.to([stepNumberRef.current, stepTitleRef.current, personImageRef.current], {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.in',
    })
    return () => {
      fadeOut.kill()
      fadeIn.kill()
    }
  }, [activeStep])
  useEffect(() => {
    if (!descriptionRef.current) return
    const tl = gsap.timeline()
    descriptionRef.current.innerText = steps[activeStep].description
    tl.fromTo(
      descriptionRef.current,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 0.4, ease: 'power1.inOut' },
    )
    return () => tl.kill()
  }, [activeStep])
  const current = steps[activeStep]
  return (
    <div className={styles.mobileWrapper} ref={containerRef}>
      <div className={styles.maskWrapper} ref={headingRef}>
        <h2 className={styles.mobileHeading} ref={headingTextRef}>
          The Magic <br /> Table in 5 Steps
        </h2>
      </div>
      <div className={styles.firstImageBlock}>
        <Image
          ref={iphoneRef}
          src={current.iphoneScreen}
          alt="iPhone Screen"
          className={styles.iphoneImage}
          width={250}
          height={350}
          quality={100}
        />
        <Image
          ref={emojiRef}
          src={current.emoji}
          alt="Emoji Gif"
          className={styles.emojiImage}
          width={51}
          height={51}
          quality={100}
        />
      </div>
      <div className={styles.stepCard} ref={cardRef}>
        <div className={styles.stepInfo}>
          <p className={styles.stepNumber} ref={stepNumberRef}>
            {current.step}
          </p>
          <h4 className={styles.stepTitle} ref={stepTitleRef}>
            {current.title}
          </h4>
          <p className={styles.stepDescription} ref={descriptionRef}>
            {current.description}
          </p>
        </div>
        <div className={styles.imageSection}>
          <Image
            ref={personImageRef}
            src={current.image}
            alt="Person Icon"
            className={styles.personImage}
            width={180}
            height={180}
            quality={100}
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  )
}
export default MagicStepsMobile
