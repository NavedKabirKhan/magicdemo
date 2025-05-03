'use client'

import React, { useEffect, useState, useRef } from 'react'
import styles from './BlogSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BlogSection = () => {
  const [posts, setPosts] = useState([])
  const sliderRef = useRef(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts?limit=5&sort=-publishedAt')
      const data = await res.json()
      setPosts(data?.docs || [])
    }

    fetchPosts()
  }, [])

  const scrollSlider = (dir) => {
    if (sliderRef.current) {
      const isMobile = window.innerWidth < 768
      const scrollAmount = isMobile ? 321 + 36 : 892 + 36 // card width + gap
      sliderRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionMain}>
        <h2 className={styles.heading}>Our Latest Blogs</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className={styles.arrowBtn} onClick={() => scrollSlider('left')}>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.20424 0.298305L0.316977 6.77983C-0.10566 7.17757 -0.10566 7.82243 0.316977 8.22017L7.20424 14.7017C7.62688 15.0994 8.31211 15.0994 8.73475 14.7017C9.15738 14.304 9.15738 13.6591 8.73475 13.2614L3.69496 8.51847L17.9178 8.51847C18.5155 8.51847 19 8.06249 19 7.5C19 6.93751 18.5155 6.48153 17.9178 6.48153L3.69496 6.48153L8.73475 1.73864C9.15738 1.34091 9.15738 0.696044 8.73475 0.298305C8.31211 -0.0994338 7.62688 -0.0994339 7.20424 0.298305Z"
                fill="white"
              />
            </svg>
          </button>
          <button className={styles.arrowBtn} onClick={() => scrollSlider('right')}>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7958 0.298305L18.683 6.77983C19.1057 7.17757 19.1057 7.82243 18.683 8.22017L11.7958 14.7017C11.3731 15.0994 10.6879 15.0994 10.2653 14.7017C9.84262 14.304 9.84262 13.6591 10.2653 13.2614L15.305 8.51847L1.08223 8.51847C0.48453 8.51847 -3.03248e-07 8.06249 -3.27835e-07 7.5C-3.52422e-07 6.93751 0.48453 6.48153 1.08223 6.48153L15.305 6.48153L10.2653 1.73864C9.84262 1.34091 9.84262 0.696044 10.2653 0.298305C10.6879 -0.0994334 11.3731 -0.0994334 11.7958 0.298305Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      <div ref={sliderRef} className={styles.blogSlider}>
        {posts.map((post) => (
          <a href={`/posts/${post.slug}`}>
            <div key={post.id} className={styles.blogCard}>
              {post?.heroImage?.url && (
                <div className={styles.imageandName}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={post.heroImage.url}
                      alt={post.title}
                      fill
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.title}>{post.title}</h3>
                </div>
              )}
              <div className={styles.content}>
                <h3 className={styles.title}>{post.title}</h3>
                <div className={styles.divider}></div>
                <p className={styles.excerpt}>
                  {post.meta?.description || 'No description available.'}
                </p>
                <div className={styles.readMore}>
                  Read More
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link href="posts">
          <button className={styles.viewAllButton}>View All</button>
        </Link>
      </div>
    </section>
  )
}

export default BlogSection
