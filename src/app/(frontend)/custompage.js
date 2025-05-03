// import Image from 'next/image'
import styles from './page.module.css'
import ProcessScroll from './components/horizontalScroll/ProcessScroll'
import ComesIn from './components/comesIn/ComesIn'
import ComesInMobile from './components/comesIn/comesInMobile/ComesInMobile'
// import StickyDownloadButton from './components/downloadBtn/DownloadBtn'
import Landing from './components/Landing/Landing'
import ChooseYourPlan from './components/ChooseYourPlan/ChooseYourPlan'
import MagicSteps from './components/MagicSteps/MagicSteps'
import MagicStepsMobile from './components/MagicSteps/MagicStepsMobile'
import Weekend from './components/Weekend/Weekend'
import OurDiners from './components/OurDinner/OurDinner'
// import FollowUsOn from './components/FollowUsOn/FollowUsOn'
import JoinTheTable from './components/JoinTheTable/JoinTheTable'
import Guide from './components/Guide/Guide'
import BlogSection from './components/BlogSection/BlogSection'

export default function Home() {
  return (
    <div className={styles.page}>
      <Landing />
      <ProcessScroll />
      <ComesIn />
      <ComesInMobile />
      <ChooseYourPlan />
      <MagicSteps />
      <MagicStepsMobile />
      <Weekend />
      <OurDiners />
      {/* <FollowUsOn /> */}
      <BlogSection />
      <JoinTheTable />
      <Guide />
    </div>
  )
}
