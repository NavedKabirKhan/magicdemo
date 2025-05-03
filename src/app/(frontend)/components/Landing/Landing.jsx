import styles from './Landing.module.css'
import searchIcon from '../../Assets/Landing/arrow.svg'
import scrolldown from '../../Assets/Landing/scrool arrow.png'
import Logo from '../../Assets/Landing/logo.png'
import Table from '../../Assets/Landing/dinnertabel.png'
import Image from 'next/image'
import Gosht from '../../Assets/Landing/gosht.gif'
import bangorePalce from '../../Assets/Landing/banglorepalace.png'
import line from '../../Assets/Landing/Vector 9.png'
import stars from '../../Assets/Landing/stars.gif'
import StickyDownloadButton from '../../components/downloadBtn/DownloadBtn'
import Link from 'next/link';

const Landing = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        {/* Logo */}
        {/* <div className={styles.LogoContainer}>
          <Image src={Logo} width={177.52} height={65} alt="logo" />
        </div> */}

        {/* Dinner Main Section */}
        <div className={styles.DinnerMainSection}>
          {/* Left Side */}
          <div className={styles.DinnerSectionLeft}>
            <div className={styles.DinnerSectionLeftText}>
              <p>Every Saturday</p>
            </div>

            <div className={styles.DinnerSectionLeftTextGif}>
              <h3>Dinner with Strangers</h3>
              <Image src={Gosht} width={66} height={66} alt="Ghost" className={styles.gost} quality={100}/>
            </div>

            <div className={styles.underline}>
              <Image src={line} width={343.5} height={31.86} alt="line" />
            </div>
            <Link href="#discover">
              <button className={styles.DinnerSectionLeftBtn}>
                <p>Discover More</p>
                <Image
                  src={stars}
                  width={44.93}
                  height={44.93}
                  alt="Ghost"
                  className={styles.splikStar}
                  quality={100}
                />
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className={styles.DinnerMainSectionRight}>
            <Image src={Table} width={684} height={669} alt="table" layout="responsive" quality={100} />
          </div>
        </div>

        {/* Bottom Controls */}
        <div className={styles.bottomControls}>
          <div className={styles.scrollText}>
            <p>
              Scroll down <br /> <span className={styles.explore}>to explore</span>
            </p>
            <Image src={scrolldown} alt="Arrow" className={styles.arrowIcon} />
          </div>

          <div className={styles.mainBtn}>
            <StickyDownloadButton />
          </div>
          <div className={styles.bangaloreTag}>
            <span className={styles.dot}></span>
            <p>
              Now in <br />
              <span className={styles.BangloreTextSpan}>Bangalore</span>
            </p>
            <Image src={bangorePalce} alt="Bangalore Palace" width={59} height={59} quality={100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
