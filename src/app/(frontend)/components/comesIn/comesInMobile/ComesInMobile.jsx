'use client'
import React, { useRef, useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'
import styles from './ComesInMobile.module.css'
import ComesInCarousal from './comesInCarousel/js'
function ComesInMobile() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.Container}>
          <div className={styles.heading}>
            <h2>That's Where Magic Table Comes In</h2>
          </div>

          <ComesInCarousal />
        </div>
      </div>
    </>
  )
}

export default ComesInMobile
