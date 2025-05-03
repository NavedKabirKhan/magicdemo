import Image from "next/image";
import FounderOne from "./tanay.png";
import FounderTwo from "./kunal.png";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainConatiner}>
          <div className={styles.TopContainer}>
            <div className={styles.TopContainerTop}>
              <h3>About Magic Table </h3>
              <p>
                At Magic Table, we believe that a great conversation can change
                your weekend — and maybe even your life. We bring together six
                strangers every Saturday night for curated dining experiences
                that spark meaningful connections. Whether you&apos;re new in town,
                expanding your circle, or simply tired of the same weekend
                plans, Magic Table is your gateway to real conversations, shared
                laughter, and unforgettable evenings
              </p>
              <p>
                {" "}
                We are not a dating app. We are not just another dinner
                reservation tool. We are a platform for human connection in an
                increasingly disconnected world. With a focus on building
                authentic offline communities, Magic Table blends the charm of
                spontaneity with the power of intentional design — delivering
                curated experiences where strangers leave the table as friends.{" "}
              </p>
              <p>
                And this is just the beginning. As we grow, Magic Table will
                expand into new verticals, from Sports Table to Creative Table,
                all built on the same belief: that the best connections happen
                when people come together in person.
              </p>
            </div>
            <div className={styles.TopContainerBottom}>
              <h3>About Spuratv Technologies Pvt. Ltd.</h3>
              <p>
                Founded on January 21, 2025, Spuratv Technologies Pvt. Ltd. is
                the parent company behind Magic Table. Headquartered in Indore,
                Madhya Pradesh, Spuratv is focused on designing digital-first
                experiences that lead to realworld social impact
              </p>
              <p>
                Magic Table is our flagship product — and our mission is clear:
                to redefine how young professionals in India meet, mingle, and
                make memories in an increasingly digital world. By using AI,
                human-centric design, and community feedback loops, Spuratv aims
                to build platforms that spark joy, trust, and true belonging.
              </p>
              <p>
                Our long-term vision is to create a suite of experience-first
                verticals under the Magic Table ecosystem — because meaningful
                human interaction should be accessible, effortless, and magical.
              </p>
            </div>
          </div>
          <div className={styles.MiddleConatiner}>
            <div className={styles.MainConatinerHeading}>
              <h3>Meet the Founders</h3>
            </div>
            <div className={styles.FounderConatiner}>
              <div className={styles.TanayConatiner}>
                <div className={styles.TanayImage}>
                  <Image
                    src={FounderOne}
                    alt="Tanay"
                    width={215}
                    height={251}
                  />
                </div>
                <div className={styles.TanayConatinerText}>
                  <div className={styles.TanayText}>
                    <h3>Tanay Jain</h3>
                  </div>
                  <div className={styles.TanayDescription}>
                    <p>
                      Tanay Jain is the founder of Spuratv Technologies Pvt.
                      Ltd. and founder of Magic Table. He holds an MSc in
                      Investments from the University of Birmingham and brings
                      strong experience from roles at Deutsche Bank and the
                      Centre for Finance, Technology and Entrepreneurship (CFTE)
                      in London. From managing KYC for international clients to
                      designing fintech course curricula, Tanay has developed a
                      rare ability to blend finance, education, and product
                      strategy. Known for his precision and thoughtfulness,
                      Tanay is passionate about building businesses that are
                      both financially sound and socially relevant. His
                      leadership at Magic Table is rooted in empathy,
                      data-driven decision-making, and a deep commitment to
                      redefining how people connect in today’s world.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.KuntalConatiner}>
                <div className={styles.KuntalImage}>
                  <Image
                    src={FounderTwo}
                    alt="kuntal"
                    width={215}
                    height={251}
                  />
                </div>
                <div className={styles.KuntalConatinerText}>
                  <div className={styles.KuntalText}>
                    <h3>Kuntal Gupta</h3>
                  </div>
                  <div className={styles.KuntalDescription}>
                    <p>
                      Kuntal Gupta, co-founder of Magic Table, holds an MSc in
                      Finance Analytics from King’s College London and a BTech
                      in Information Technology from NMIMS. With experience at
                      Quantiphi Analytics and Vodafone, Kuntal has led complex
                      projects in data engineering, trade signal analysis, and
                      predictive modeling. His technical fluency spans Python,
                      SQL, R, big data platforms, and interactive visualizations
                      — all of which power the seamless and scalable Magic Table
                      platform. Kuntal is driven by the belief that meaningful
                      human experiences can be designed through the right mix of
                      code, empathy, and purpose. He’s also a published
                      researcher, NLP enthusiast, and a strong advocate for
                      community-focused innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.BottomConatiner}>
            <p>
              Together, we are building Magic Table as a movement — a place
              where strangers meet not through algorithms and profiles, but
              through shared plates and stories.
            </p>
            <h3>
              Come take a seat at Magic Table. The conversation starts here.{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
