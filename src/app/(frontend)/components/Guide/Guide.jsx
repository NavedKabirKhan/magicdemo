"use client";
import { useRef, useState } from "react";
import styles from "./Guide.module.css";
import Image from "next/image";

import PlusSymbol from "../../Assets/Guide/plus.png";
import MinusSymbol from "../../Assets/Guide/minus.png";

const faqs = [
  {
    question: "What is Magic Table?",
    answer:
      "A social dining platform that connects strangers over dinner, sparking meaningful conversations and community.",
  },
  {
    question: "How does it work?",
    answer:
      "Sign up via uor app, answer 8 quick questions, and we will match you with 5-6 like-minded strangers with Saturady dinner.",
  },
  {
    question: "Is it a dating app?",
    answer:
      "Not at all! it's about building friendships and community, not romance.",
  },
  {
    question: "Who can join?",
    answer:
      "Anyone 18+, through it's perfect for young professsionals, enterpreneurs, and students aged 20-35 eager to expand their circle.",
  },
  {
    question: "How much does it cost?",
    answer: "Pay ₹249 for one dinner or save with subscriptions: ₹349 (1 month), ₹849 (3 months), or ₹1449 (6 months). Check the app for details.",
  },
  {
    question: "What does the fee cover?",
    answer: "The fee you pay through the app is a service fee that covers your booking and our group curation. It does not include the restaurant bill—you'll settle that directly with the restaurant.",
  },
  {
    question: "Is it safe?",
    answer: "Absolutely.  We verify users, host dinners in public restaurants, and balance groups by gender for comfort.",
  },
  {
    question: "What if I need to cancel?",
    answer: "No  refunds  for  single  dinners.  Subscriptions?  Cancel  by  the  same day—no hassle.",
  },
  {
    question: "Can I choose my group?",
    answer: "No, our algorithm picks your crew based on compatibility—trust us, it works!",
  },
  {
    question: "What happens at dinner?",
    answer: "Expect icebreakers, tasty food, and lively chats at a cozy restaurant. Pro tip: Split the bill with your new pals! ",
  },
  {
    question: "What if something goes wrong at dinner?",
    answer: "If you encounter any issues during the dinner, you can report them directly through the app while you're still at the restaurant. We're here to help ensure your experience is positive.",
  },
  {
    question: "How do I give feedback",
    answer: "Rate your night and share thoughts via the app afterward—we're all ears.",
  },
];

const Guide = () => {
  const [openIndex, setOpenIndex] = useState();
  const [showAll, setShowAll] = useState(false);
  const refs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <h3>Your Guide to Magic Table</h3>
        </div>
        <div className={styles.QAContainer}>
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={styles.QACard}
                onClick={() => toggleFAQ(index)}
              >
                <div className={styles.QACardHeader}>
                  <div className={styles.QACardHeaderTop}>
                    <h4>{faq.question}</h4>
                    <div className={styles.iconContainer}>
                      <Image
                        src={isOpen ? MinusSymbol : PlusSymbol}
                        alt={isOpen ? "Minus" : "Plus"}
                        width={20}
                        height={20}
                        className={styles.icon}
                      />
                    </div>
                  </div>
                </div>
                <div
                  ref={(el) => (refs.current[index] = el)}
                  className={styles.QACardAnswer}
                  style={{
                    maxHeight: isOpen
                      ? `${refs.current[index]?.scrollHeight}px`
                      : "0px",
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? "0px" : "0px",
                    transition: "all 0.4s ease-in-out",
                  }}
                >
                  <div className={styles.line}></div>
                  {faq.answer}
                </div>
              </div>
            );
          })}
          <button
            onClick={() => setShowAll(!showAll)}
            className={styles.viewToggleButton}
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
