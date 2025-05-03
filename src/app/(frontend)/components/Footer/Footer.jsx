"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PlayStore from "../../Assets/Footer/playstore.png";
import AppleStore from "../../Assets/Footer/applestore.png";
import ArrowIcon from "../../Assets/Footer/Arrow 21.svg";
import Logo from "../../Assets/Footer/footerlogo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Subscribing...");

    if (!email) {
      setStatus("Email is required.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Subscription successful!");
        setEmail(""); // Clear the input field
      } else {
        setStatus(result.message || "Subscription failed.");
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      setStatus("Error subscribing. Please try again.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.TopConatiner}>
          <div className={styles.leftContainer}>
            <Link href="/">
              <Image
                src={Logo}
                alt="Magic Table Logo"
                width={274.4}
                height={100.41}
                layout="responsive"
              />
            </Link>
            <p>Get updated on our latest news</p>
            <div className={styles.form}>
            <form onSubmit={handleSubmit} className={styles.newsletter}>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={handleChange}
              required
            />
            <button type="submit">Notify Me</button>
          </form>
          </div>
          {status && <p>{status}</p>}
          </div>
          
        <div className={styles.rightContainer}>
          <div className={styles.rightContainerHeading}>
            <h3>
              Shake up your weekend{" "}
              <span className={styles.downloadSpan}>Download Now</span>
            </h3>
          </div>

          <div className={styles.storeButtons}>
            <div className={styles.googlePlayStore}>
              <div className={styles.arrowMain}>
                <Image
                  src={ArrowIcon}
                  width={18.97}
                  height={0}
                  alt="Arrow"
                  layout="responsive"
                />
              </div>
              <div className={styles.storeButtonOne}>
                <Image
                  src={PlayStore}
                  width={45}
                  height={51}
                  alt="Play Store"
                />
                <p>
                  Coming Soon on <br />
                  Google Play
                </p>
              </div>
            </div>

            <div className={styles.applePlayStore}>
              <div className={styles.arrowMainTwo}>
                <Image
                  src={ArrowIcon}
                  width={18.97}
                  height={0}
                  alt="Arrow"
                  layout="responsive"
                />
              </div>
              <div className={styles.storeButtonTwo}>
                <Image
                  src={AppleStore}
                  width={45}
                  height={54}
                  alt="App Store"
                />
                <p>
                  Coming Soon on <br /> App Store
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div className={styles.BottomContainer}>
          <div className={styles.BottomContainerRight}>
            <div className={styles.legalLinks}>
              <p>
                Made With ❤️ <span>India</span>
                <br />© 2025 Magic Table
              </p>
              <Link href="/AboutUs">About Us</Link>
              <Link href="/ContactUs">Contact Us</Link>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
              <Link href="/TermsAndConditions">Terms & Conditions</Link>
            </div>
          </div>
          <div className={styles.BottomContainerLeft}>
            <div className={styles.madeWith}>
              <p>
                <span>Spuratv Technologies Private Limited</span>
                <br />
                Crafted by{" "}
                <Link href="https://integramagna.com" target="_blank">
                  <span className={styles.India}>Integra Magna</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
