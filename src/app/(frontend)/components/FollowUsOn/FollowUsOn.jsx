'use client'
import styles from './FollowUsOn.module.css'
import Image from 'next/image'
import InstaOne from '../../Assets/FollowUsOn/insta1.png'
import InstaTwo from '../../Assets/FollowUsOn/insta2.png'
import InstaThree from '../../Assets/FollowUsOn/insta3.png'
import InstaFour from '../../Assets/FollowUsOn/insta4.png'
import InstaFive from '../../Assets/FollowUsOn/insta5.png'
import InstaSix from '../../Assets/FollowUsOn/insta6.png'
import { useEffect, useState } from 'react'

const FollowUsOn = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('../../api/instagram')
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setPosts(data.data)
        }
      })
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <h3>Our Feed</h3>
        </div>
        <div className={styles.ImagesContainer}>
          {posts.length > 0 ? (
            posts.slice(0, 9).map((post) => (
              <a href={post.permalink} key={post.id} target="_blank" rel="noreferrer">
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || 'Instagram Post'}
                  className={styles.InstagramImage}
                />
              </a>
            ))
          ) : (
            <p>No Instagram posts found.</p>
          )}
        </div>

        <div className={styles.followBtn}>
          <button className={styles.button}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Follow Us On Instagram
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FollowUsOn
