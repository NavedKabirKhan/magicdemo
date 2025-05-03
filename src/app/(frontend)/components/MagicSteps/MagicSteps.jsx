'use client'

import React, { useEffect, useRef } from 'react'
import styles from './MagicSteps.module.css'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import IphoneScreen1 from '../../Assets/MagicSteps/iPhone1.png'
import IphoneScreen2 from '../../Assets/MagicSteps/iPhone2.png'
import IphoneScreen3 from '../../Assets/MagicSteps/iPhone3.png'
import IphoneScreen4 from '../../Assets/MagicSteps/iPhone4.png'
import IphoneScreen5 from '../../Assets/MagicSteps/iPhone5.png'

import PersonOne from '../../Assets/MagicSteps/personOne.svg'
import PersonTwo from '../../Assets/MagicSteps/personTwo.svg'
import PersonThree from '../../Assets/MagicSteps/personThree.svg'
import PersonFour from '../../Assets/MagicSteps/personFour.svg'
import PersonFive from '../../Assets/MagicSteps/personFive.svg'

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
    description: 'Download the Magic Table app & answer 8 quick questions - we’ll match you with the perfect group.',
    image: PersonOne,
    emoji: StarsEmojiGif,
    iphoneScreen: IphoneScreen1,
    rotate: '-2.57deg',
  },
  {
    step: 'Step 2',
    title: 'Pick Your Spot',
    description: 'Pick a Saturday, book a single dinner or a subscription, and get matched with 5-6 like minded strangers.',
    image: PersonTwo,
    emoji: CameraEmojiGif,
    iphoneScreen: IphoneScreen2,
    rotate: '2deg',
  },
  {
    step: 'Step 3',
    title: 'Book Your Seat',
    description: 'Select your city and choose a preferred locality to dine in - whether it’s near home or somewhere new.',
    image: PersonThree,
    emoji: CelebarteEmojiGif,
    iphoneScreen: IphoneScreen3,
    rotate: '-3deg',
  },
  {
    step: 'Step 4',
    title: 'Show Up',
    description: 'On the day, the restaurant is revealed - just show up, meet your group, and enjoy the conversation.',
    image: PersonFour,
    emoji: HandByeEmojiGif,
    iphoneScreen: IphoneScreen4,
    rotate: '-2deg',
  },
  {
    step: 'Step 5',
    title: 'Rate It',
    description: 'After dinner, rate your group from 1-10 in the app. Your feedback helps us fine-tune your future dinners.',
    image: PersonFive,
    emoji: LoveEyesEmojiGif,
    iphoneScreen: IphoneScreen5,
    rotate: '3deg',
  },
]

const LeftContent = ({ detailsRef }) => (
  <div className={styles.left}>
    <div className={styles.desktopContent}>
      <div className={styles.heading}>
        <h2>The Magic in 5 steps</h2>
      </div>
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => (detailsRef.current[index] = el)}
          className={styles.desktopContentSection}
          style={{ transform: `rotate(${step.rotate})` }}
        >
          <div className={styles.CardOneLeft}>
            <div className={styles.CardOneTopTexts}>
              <p>{step.step}</p>
              <h4>{step.title}</h4>
            </div>
            <div className={styles.CardOneBottomTexts}>
              <p>{step.description}</p>
            </div>
          </div>
          <div className={styles.CardOneRight}>
            <Image src={step.image} alt="image" />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const RightContent = ({ detailsRef }) => {
  const photosRef = useRef([])
  const screensRef = useRef([])

  useEffect(() => {
    const details = detailsRef.current
    const photos = photosRef.current
    const screens = screensRef.current

    gsap.set(photos, { autoAlpha: 0 })
    gsap.set(photos[0], { autoAlpha: 1 })
    gsap.set(screens, { autoAlpha: 0 })
    gsap.set(screens[0], { autoAlpha: 1 })

    const triggers = []

    triggers.push(
      ScrollTrigger.create({
        trigger: `.${styles.gallery}`,
        start: 'top top',
        end: '100% 100%',
        pin: `.${styles.right}`,
        pinSpacing: false,
      })
    )

    details.forEach((detail, index) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: detail,
          start: 'top 40%',
          end: 'bottom 10%',
          pinSpacing: false,
          onEnter: () => {
            gsap.to(photos, { autoAlpha: 0, duration: 0.2 })
            gsap.to(screens, { autoAlpha: 0, duration: 0.2 })
            gsap.to(photos[index], { autoAlpha: 1, duration: 0.3 })
            gsap.to(screens[index], { autoAlpha: 1, duration: 0.3 })
          },
          onLeave: () => {
            if (index !== steps.length - 1) {
              gsap.to(photos[index], { autoAlpha: 0, duration: 0.2 })
              gsap.to(screens[index], { autoAlpha: 0, duration: 0.2 })
            }
          },
          onEnterBack: () => {
            gsap.to(photos, { autoAlpha: 0, duration: 0.2 })
            gsap.to(screens, { autoAlpha: 0, duration: 0.2 })
            gsap.to(photos[index], { autoAlpha: 1, duration: 0.3 })
            gsap.to(screens[index], { autoAlpha: 1, duration: 0.3 })
          },
          onLeaveBack: () => {
            if (index !== 0) {
              gsap.to(photos[index], { autoAlpha: 0, duration: 0.2 })
              gsap.to(screens[index], { autoAlpha: 0, duration: 0.2 })
            }
          },
        })
      )
    })

    return () => {
      triggers.forEach((trigger) => trigger.kill())
    }
  }, [detailsRef])

  return (
    <div className={styles.right}>
      <div className={styles.ImageContainer}>
        {steps.map((step, index) => (
          <Image
            key={index}
            ref={(el) => (screensRef.current[index] = el)}
            src={step.iphoneScreen}
            alt={`iPhone screen ${index + 1}`}
            width={658}
            height={801}
            className={styles.iphoneScreen}
            quality={100}
          />
        ))}
      </div>

      <div className={styles.EmojiContainer}>
        {steps.map((step, index) => (
          <Image
            key={index}
            ref={(el) => (photosRef.current[index] = el)}
            src={step.emoji}
            alt="emoji"
            width={100}
            height={100}
            className={`${styles.emoji} ${styles[`emoji${index + 1}`]}`}
            quality={100}
          />
        ))}
      </div>
    </div>
  )
}

const MagicSteps = () => {
  const detailsRef = useRef([])

  return (
    <div className={styles.gallery}>
      <LeftContent detailsRef={detailsRef} />
      <RightContent detailsRef={detailsRef} />
    </div>
  )
}

export default MagicSteps;
