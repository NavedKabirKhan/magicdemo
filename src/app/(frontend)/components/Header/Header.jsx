'use client'

import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../Assets/Landing/logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.LogoContainer}>
          <Link href="/">
            <Image src={Logo} width={177.52} height={65} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
