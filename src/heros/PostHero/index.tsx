import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'
import styles from './PostHero.module.css'
import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{ post: Post }> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHead}>
          <div className={styles.category}>
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const titleToUse = category.title || 'Untitled category'
                const isLast = index === categories.length - 1
                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <>,&nbsp;</>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <h1 className={styles.title}>{title}</h1>

          <div className={styles.metaContainer}>
            {hasAuthors && (
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Author</p>
                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            )}
            {publishedAt && (
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Date Published</p>
                <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.ImgCont}>
        {heroImage && typeof heroImage !== 'string' && (
          <Media priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
