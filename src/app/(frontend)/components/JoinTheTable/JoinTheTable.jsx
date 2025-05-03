"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./JoinTheTable.module.css";
import Image from "next/image";
import PlayStore from "../../Assets/JoinTheTable/playstore.png";
import AppleStore from "../../Assets/JoinTheTable/applestore.png";
import QRCode from "../../Assets/JoinTheTable/scanner.png";
import ArrowIcon from "../../Assets/JoinTheTable/arrow21.svg";
import Iphone from "../../Assets/JoinTheTable/Phone.png";
import MagictableText from "../../Assets/JoinTheTable/MAGIC TABLE.png";

gsap.registerPlugin(ScrollTrigger);

const JoinTheTable = () => {
  const phoneRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      phoneRef.current,
      { scale: 0.85 },
      {
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className={styles.main} ref={sectionRef}>
      <div className={styles.mainContainer}>
        <div className={styles.magictableLogo}>
          <Image
            src={MagictableText}
            width={1920}
            height={229}
            alt="magictable text"
            quality={100}
            // layout="responsive"
          />
        </div>

        <div className={styles.leftContainer} ref={phoneRef}>
          <Image
            src={Iphone}
            alt="Phone"
            width={982}
            height={900}
            layout="responsive"
            quality={100}
          />
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.rightContainerHeading}>
            <h3>Break the Routine. Join the Table.</h3>
            <p>
              Tired of the same old plans? Magic Table pairs you with strangers
              for a surprise dinner – no swiping, no profiles, just great food
              and real talks.
            </p>
          </div>

          <div className={styles.qrContainer}>
            <p>Scan to Download</p>
            <Image
              src={QRCode}
              width={95}
              height={95}
              alt="QR Code"
              layout="responsive"
            />
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
                  layout="responsive"
                  
                />
                <p>Coming Soon on<br/> Google Play</p>
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
                  layout="responsive"
                />
                <p>Coming Soon on<br/> App Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTheTable;
