"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./DownloadBtn.module.css";
import Icon from "./icon.svg";

gsap.registerPlugin(ScrollTrigger);

export default function StickyDownloadButton() {
  const mainRef = useRef(null);
  const textRef = useRef(null);
  const isCollapsed = useRef(false);
  const isHovering = useRef(false);
  const isMobile = useRef(false); // 👈

  const setCollapsed = (state) => {
    if (isMobile.current) return; // 👈 skip animation on mobile

    isCollapsed.current = state;

    gsap.to(mainRef.current, {
      width: state ? 83 : 350,
      duration: 0.3,
      ease: "power4.out",
    });

    gsap.to(textRef.current, {
      opacity: 1, // keep always visible in both states
      duration: 0.3,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth < 640;

      // Always expand on mobile
      if (isMobile.current) {
        gsap.set(mainRef.current, { width: 350 });
        gsap.set(textRef.current, { opacity: 1 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (window.innerWidth >= 640) {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const scrollTop = self.scroll();

          if (scrollTop < 10 && isCollapsed.current) {
            setCollapsed(false);
          } else if (scrollTop >= 10 && !isCollapsed.current && !isHovering.current) {
            setCollapsed(true);
          }
        },
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile.current && isCollapsed.current) {
      isHovering.current = true;
      setCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile.current && isHovering.current) {
      isHovering.current = false;
      if (window.scrollY > 10) {
        setCollapsed(true);
      }
    }
  };

  return (
    <div
      ref={mainRef}
      className={styles.downloadBtnMain}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.downloadBtnContainer}>
        <div ref={textRef} className={styles.downloadText}>
          <span>App Coming Soon</span>
        </div>
        <div className={styles.downloadIcon}>
          <Image src={Icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
