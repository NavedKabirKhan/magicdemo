"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ChooseYourPlan.module.css";
import Image from "next/image";
import Badge from "../../Assets/ChooseYourPlan/Badge.png";

gsap.registerPlugin(ScrollTrigger);

const ChooseYourPlan = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef([]);
  const cardsRef = useRef([]);
  const bookSeatRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      headingRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: i * 0.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      });

      cardsRef.current.forEach((card, i) => {
        const yFrom = 60 + i * 100;
        gsap.from(card, {
          y: yFrom,
          opacity: 0,
          duration: 1.2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      });

      // Book Your Seat (comes right after, no delay)
      gsap.from(bookSeatRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.main} ref={sectionRef} id="Plans">
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <div className={styles.maskWrapper}>
            <h3 ref={(el) => (headingRef.current[0] = el)}>Dining Plans</h3>
          </div>
          <div className={styles.maskWrapper}>
            <p ref={(el) => (headingRef.current[1] = el)}>
              *Prices in INR, taxes included. Subscriptions auto-renew; cancel
              anytime before renewal.
            </p>
          </div>
        </div>
        <div className={styles.totalConatiner}>
          {/* Heading */}

          {/* Cards */}
          <div className={styles.DinnerCards}>
            <div className={styles.CardOneContainer}>
              <div className={styles.CardOneText}>
                <h3 ref={(el) => (headingRef.current[2] = el)}>Dine Once</h3>
              </div>
              <div
                className={styles.CardOne}
                ref={(el) => (cardsRef.current[0] = el)}
              >
                <div className={styles.CardOnePrice}>
                  <h4>₹249</h4>
                  <p>/1 Dinner</p>
                </div>
                <div className={styles.CardOnePlanValidity}>
                  <p>For One-Time Experience</p>
                </div>
                <div className={styles.CardOneBottomText}>
                  <p>No commitments Just show up & enjoy</p>
                </div>
                <div className={styles.nonRefundContainerMain}>
                  <div className={styles.nonRefundContainer}>
                    <p>Non-refundable</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.line}
              ref={(el) => (cardsRef.current[1] = el)}
            ></div>
            <div className={styles.CardTwoContainer}>
              <div className={styles.CardTwoText}>
                <h3 ref={(el) => (headingRef.current[3] = el)}>
                  Subscription Plans
                </h3>
              </div>
              <div className={styles.AllThreeCards}>
              <div
                className={styles.CardTwo}
                ref={(el) => (cardsRef.current[2] = el)}
              >
                <div className={styles.CardTwoPrice}>
                  <h4>₹349</h4>
                  <p>/4 Dinners</p>
                </div>
                <div className={styles.CardTwoPlanValidity}>
                  <p>1 Month Subscription</p>
                </div>
                <div className={styles.CardTwoBottomText}>
                  <p>Save more & dine more Just ₹87 per dinner</p>
                </div>
              </div>
            <div className={styles.lastCards}>
              <div
                className={styles.CardThree}
                ref={(el) => (cardsRef.current[3] = el)}
              >
                <div className={styles.CardThreeMain}>
                  <div className={styles.cardThreeContainer}>
                    <div className={styles.cardThreeContainerTop}>
                      <div className={styles.CardThreePrice}>
                        <h4>₹849</h4>
                        <p>/12 Dinners</p>
                      </div>
                      <div className={styles.CardThreePlanValidity}>
                        <p>3 Month Subscription</p>
                      </div>
                    </div>
                    <div className={styles.badge}>
                      <Image src={Badge} width={41} height={59} alt="badge" />
                    </div>
                  </div>

                  <div className={styles.CardThreeBottomText}>
                    <p>More meals, more deals Just ₹71 per dinner</p>
                  </div>
                </div>
                <div className={styles.popularContainerMain}>
                  <div className={styles.popularContainer}>
                    <p>Most Popular</p>
                  </div>
                </div>
                </div>
              </div>

              <div
                className={styles.CardFour}
                ref={(el) => (cardsRef.current[4] = el)}
              >
                <div className={styles.CardFourPrice}>
                  <h4>₹1449</h4>
                  <p>/24 Dinners</p>
                </div>
                <div className={styles.CardFourPlanValidity}>
                  <p>6 Month Subscription</p>
                </div>
                <div className={styles.CardFourBottomText}>
                  <p>Dine smarter, save bigger Just ₹61 per dinner</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Book Your Seat */}
          <button className={styles.BookSeatSection} ref={bookSeatRef}>
            <p>Book Your Seat</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
