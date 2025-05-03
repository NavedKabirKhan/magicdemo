"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./OurDinner.module.css";
import firstDinnerImage from "../../Assets/OurDinner/dinnerone.png";
import secondDinnerImage from "../../Assets/OurDinner/dinnertwo.png";
import thirdDinnerImage from "../../Assets/OurDinner/dinnerthree.png";
import fourthDinnerImage from "../../Assets/OurDinner/dinnerfour.png";

import PeopleOne from "../../Assets/OurDinner/personone.svg";
import PeopleTwo from "../../Assets/OurDinner/persontwo.svg";
import PeopleThree from "../../Assets/OurDinner/personthree.svg";
import Image from "next/image";
import StickerOne from "../../Assets/OurDinner/StickerOne.svg"
import StickerTwo from "../../Assets/OurDinner/StickerTwo.svg"
import StickerThree from "../../Assets/OurDinner/StickerThree.svg"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rotatingImages = [firstDinnerImage, secondDinnerImage, thirdDinnerImage, fourthDinnerImage];

const OurDinner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);
  const personCardOneRef = useRef(null);
  const personCardTwoRef = useRef(null);
  const personCardThreeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      tl.fromTo(
        cardOneRef.current,
        { y: 0, autoAlpha: 0, rotation: 0.2 },
        { y: -20, autoAlpha: 1, rotation: -0.2, duration: 0.3, ease: "power2.out" }
      )
        .fromTo(
          personCardOneRef.current,
          { rotation: -4.45 },
          { rotation: 4.45, duration: 0.3, ease: "power2.out" },
          "<"
        )
        .fromTo(
          cardTwoRef.current,
          { y: 100, autoAlpha: 0, rotation: -1.66 },
          { y: -20, autoAlpha: 1, rotation: 1.66, duration: 0.3, ease: "power2.out" }
        )
        .fromTo(
          personCardTwoRef.current,
          { rotation: -1.64 },
          { rotation: 1.64, duration: 0.3, ease: "power2.out" },
          "<"
        )
        // .to(cardTwoRef.current, { y: -40, duration: 0.5, ease: "power2.out" })


        .fromTo(
          cardThreeRef.current,
          { y: 100, autoAlpha: 0, rotation: 0.88 },
          { y: 0, autoAlpha: 1, rotation: -0.88, duration: 0.3, ease: "power2.out" }
        )
        .fromTo(
          personCardThreeRef.current,
          { rotation: 4.13 },
          { rotation: -4.13, duration: 0.3, ease: "power2.out" },
          "<"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className={`${styles.main} ourDinnerSection`} ref={containerRef}>
      <div className={styles.MainConatiner}>
        <div className={styles.LeftContainer}>
          <div className={styles.heading}>
            <h3>What Our Diners Say!</h3>
          </div>
          <div className={styles.LeftContainerImages}>
            <Image src={secondDinnerImage} width={426.01} height={454.12} className={styles.DinnerThree} layout="responsive" alt="dinner three" quality={100} />
            <Image src={fourthDinnerImage} width={426.89} height={452.83} className={styles.DinnerFour} layout="responsive" alt="dinner four" quality={100} />
            <Image src={firstDinnerImage} width={425.87} height={454.33} className={styles.DinnerOne} layout="responsive" alt="dinner one" quality={100} />
            <Image src={rotatingImages[currentImageIndex]} width={427.44} height={451.7} className={styles.DinnerTwo} layout="responsive" alt="dinner rotating" quality={100} />
          </div>
        </div>

        <div className={styles.RightContainer}>
          <div className={styles.CardsConatiner}>
            <div className={styles.CardOne} ref={cardOneRef}>
              <div className={styles.CardOneTexts}>
                <h4>Mayank S.</h4>
                <p>New to Bangalore, I felt like an outsider – until Magic Table. It’s my shortcut to great conversations and feeling at home.</p>
              </div>
              <div className={styles.PersonOneCard} ref={personCardOneRef}>
                <div className={styles.PersonOneCardContent}>
                  <h4>Authentic</h4>
                  <Image src={PeopleOne} alt="people one" width={153} height={153} className={styles.PeopleOneImage} />
                </div>
              </div>
            </div>

            <div className={styles.CardTwo} ref={cardTwoRef} style={{ opacity: 0 }}>
              <div className={styles.CardTwoTexts}>
                <h4>Ankita U.</h4>
                <p>Magic Table made meeting new people feel effortless. I’ve already made friends I’d never have crossed paths with otherwise!</p>
              </div>
              <div className={styles.PersonCardTwo} ref={personCardTwoRef}>
                <div className={styles.PersonTwoCardContent}>
                  <h4>Unfiltered</h4>
                  <Image src={PeopleTwo} alt="people two" width={118} height={118} className={styles.PeopleTwoImage} />
                </div>
              </div>
            </div>
            <div className={styles.CardThree} ref={cardThreeRef} style={{ opacity: 0 }}>
              <div className={styles.CardThreeTexts}>
                <h4>Sakshi S.</h4>
                <p>Every Saturday with Magic Table is a highlight. It’s now my favorite way to kick off the weekend!</p>
              </div>
              <div className={styles.PersonCardThree} ref={personCardThreeRef}>
                <div className={styles.PersonThreeCardContent}>
                  <h4>Memorable</h4>
                  <Image src={PeopleThree} alt="people three" width={142} height={142} className={styles.PeopleThreeImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className={`${styles.mainMobile} ourDinnerSection`}>
        <div className={styles.MainConatiner}>
          <div className={styles.LeftContainer}>
            <div className={styles.heading}>
              <h3>What Our Diners Say!</h3>
            </div>
            <div className={styles.LeftContainerImages}>
              <Image src={secondDinnerImage} width={426.01} height={454.12} className={styles.DinnerThree} layout="responsive" alt="dinner three" quality={100}/>
              <Image src={fourthDinnerImage} width={426.89} height={452.83} className={styles.DinnerFour} layout="responsive" alt="dinner four" quality={100}/>
              <Image src={firstDinnerImage} width={425.87} height={454.33} className={styles.DinnerOne} layout="responsive" alt="dinner one" quality={100} />
              <Image src={rotatingImages[currentImageIndex]} width={427.44} height={451.7} className={styles.DinnerTwo} layout="responsive" alt="dinner rotating" quality={100} />
            </div>
          </div>
  
          <div className={styles.RightContainer}>
            <div className={styles.CardsConatiner}>
              <div className={styles.CardOne} >
                <div className={styles.CardOneTexts}>
                  <h4>Mayank S.</h4>
                  <p>New to Bangalore, I felt like an outsider – until Magic Table. It’s my shortcut to great conversations and feeling at home.</p>
                </div>
                <div className={styles.PersonOneCard} >
                  <Image src={StickerOne} width={168} height={88} alt="sticker" quality={100} />
                </div>
              </div>
  
              <div className={styles.CardTwo} >
                <div className={styles.CardTwoTexts}>
                  <h4>Ankita U.</h4>
                  <p>Magic Table made meeting new people feel effortless. I’ve already made friends I’d never have crossed paths with otherwise!</p>
                </div>
                <div className={styles.PersonCardTwo} >
                <Image src={StickerTwo} width={168} height={95} alt="sticker" quality={100}/>

                </div>
              </div>
              <div className={styles.CardThree} >
                <div className={styles.CardThreeTexts}>
                  <h4>Sakshi S.</h4>
                  <p>Every Saturday with Magic Table is a highlight. It’s now my favorite way to kick off the weekend!</p>
                </div>
                <div className={styles.PersonCardThree} >
                <Image src={StickerThree} width={186} height={95} alt="sticker" quality={100}/>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default OurDinner;
