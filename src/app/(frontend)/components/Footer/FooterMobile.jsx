"use client";
import { useState } from "react";
import styles from "./FooterMobile.module.css";
import Image from "next/image";
import PlayStore from "../../Assets/Footer/playstore.png";
import AppleStore from "../../Assets/Footer/applestore.png";
import ArrowIcon from "../../Assets/Footer/Arrow 21.svg";
import Logo from "../../Assets/Footer/footerlogo.png";
import Link from "next/link";

const FooterMobile = () => {
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
        <div className={styles.Top}>
          <Link href="/">
            <Image
              src={Logo}
              width={126}
              height={46}
              alt="Magic Table Logo"
              layout="responsive"
            />
          </Link>
          <p>
            Shake up your weekend
            <br />
            <span className={styles.specialText}>Download Now</span>
          </p>
        </div>

        <div className={styles.StoreButtons}>
          <div className={styles.GoogleButton}>
            <div className={styles.GoogleButtonIcons}>
              <Image
                src={PlayStore}
                width={23}
                height={26}
                alt="playstore logo"
              />
              <Image
                src={ArrowIcon}
                width={15}
                height={15}
                alt="Arrow"
                layout="responsive"
              />
            </div>
            <div className={styles.GoogleButtonText}>
              <p>
                Coming Soon on <br /> Google Play
              </p>
            </div>
          </div>
          <div className={styles.AppleButton}>
            <div className={styles.AppleButtonIcons}>
              <Image
                src={AppleStore}
                width={22}
                height={27}
                alt="applestore logo"
              />
              <Image
                src={ArrowIcon}
                width={15}
                height={15}
                alt="Arrow"
                layout="responsive"
              />
            </div>
            <div className={styles.AppleButtonText}>
              <p>
                Coming Soon on <br /> App Store
              </p>
            </div>
          </div>
        </div>

        <div className={styles.UpdatesConatiner}>
          <div className={styles.UpdatesConatinerText}>
            <p>Get updated on our latest news</p>
          </div>
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
          {status && <p>{status}</p>}
        </div>

        <div className={styles.LastConatiner}>
          <div className={styles.legalLinks}>
            <p>
              <Link href="/AboutUs"> About Us </Link>
            </p>
            <p>
              <Link href="/ContactUs">Contact Us</Link>
            </p>
            <p>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
            </p>
            <p>
              <Link href="/TermsAndConditions">Terms & Conditions</Link>
            </p>
            </div>
            <div className={styles.legalLinksBottom}>
              <p > <span className={styles.affiliated}>Spuratv Technologies Private Limited </span></p>
              <p>
                Crafted by{" "}
                <Link href="https://integramagna.com" target="_blank">
                  <span className={styles.India}>Integra Magna</span>
                </Link>
              </p>
              <p>
                Made With ❤️ <span className={styles.India}>India</span>
              </p>
            </div>
          </div>
          <div className={styles.lastTextConatiner}>
          <p>© 2025 Magic Table</p>
        </div>
        </div>

    </footer>
  );
};

export default FooterMobile;
