'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Weekend.module.css'
import Image from 'next/image'
import PlayStore from '../../Assets/Weekend/playstore.png'
import AppleStore from '../../Assets/Weekend/applestore.png'
import QRCode from '../../Assets/Weekend/scanner.png'
import ArrowIcon from '../../Assets/Weekend/Arrow 21.svg'
import colorback from '../../Assets/Weekend/backgrond.png'
import colorMobile from '../../Assets/Weekend/backMobile.png'

gsap.registerPlugin(ScrollTrigger)

const Weekend = () => {
  const sectionRef = useRef(null)
  const leftTextRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        leftTextRef.current.querySelectorAll('h3, p'),
        {
          y: 100,
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
      ).fromTo(
        rightRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8',
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.main} ref={sectionRef} >
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer} ref={leftTextRef}>
          <div className={styles.maskWrapper}>
            <h3>
              This Weekend, <br />
              Do Something Different!
            </h3>
          </div>
          <div className={styles.maskWrapper}>
            <p>
              Ditch the routine, meet new people, and make <br />
              every Saturday memorable.
            </p>
          </div>
        </div>

        <div className={styles.rightContainer} ref={rightRef}>
          <div className={styles.qrContainer}>
            <p>Scan to Download</p>
            <Image src={QRCode} width={116} height={116} alt="QR Code" layout="responsive" />
          </div>
          <div className={styles.storeButtons}>
            <div className={styles.googlePlayStore}>
            <div className={styles.arrowMain}>
                <Image src={ArrowIcon} width={18.97} height={0} alt="Arrow" layout="responsive" />
              </div>
              <div className={styles.storeButtonOne}>
                <Image
                  src={PlayStore}
                  width={45}
                  height={51}
                  alt="Play Store"
                  // layout="responsive"
                />
                <p>Coming Soon on <br /> Google Play</p>
              </div>
            </div>

            <div className={styles.applePlayStore}>
              <div className={styles.arrowMain}>
                <Image src={ArrowIcon} width={18.97} height={0} alt="Arrow" layout="responsive" />
              </div>
              <div className={styles.storeButtonTwo}>
                <Image
                  src={AppleStore}
                  width={45}
                  height={54}
                  alt="App Store"
                  // layout="responsive"
                />
                <p>Coming Soon on <br /> App Store</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.ColorImage}>
          <Image src={colorback} width={1920} height={524} alt="colorimage" className={styles.colorback} quality={100} />
          <Image src={colorMobile} width={402} height={242} alt="color Mobile" className={styles.colorMobile} quality={100}/>
        </div> */}
      </div>
    </div>
  )
}

export default Weekend
