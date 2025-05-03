'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './Card.module.css'
import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = ({ className, doc, relationTo = 'posts', showCategories = true, title: titleFromProps }) => {
  const { card, link } = useClickableCard({})
  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const href = `/${relationTo}/${slug}`
  const titleToUse = titleFromProps || title
  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ')

  return (
    <article ref={card.ref} className={cn(styles.cardWrapper, className)}>
      <div className={styles.imageContainer}>
        {metaImage && typeof metaImage !== 'string' ? (
          <Media resource={metaImage} size="100vw" />
        ) : (
          <div className={styles.noImage}>No image</div>
        )}
      </div>

      <div className={styles.cardBody}>
        {/* Categories */}
        {showCategories && hasCategories && (
          <div className={styles.categories}>
            {categories.map((category, index) => {
              if (typeof category === 'object') {
                const title = category?.title || 'Untitled'
                const isLast = index === categories.length - 1
                return (
                  <Fragment key={index}>
                    {title}
                    {!isLast && <span>,&nbsp;</span>}
                  </Fragment>
                )
              }
              return null
            })}
          </div>
        )}

        {/* Title */}
        {titleToUse && (
          <h3 className={styles.title}>
            <Link href={href} ref={link.ref} className={styles.titleLink}>
              {titleToUse}
            </Link>
          </h3>
        )}

        {/* Description */}
        {sanitizedDescription && <p className={styles.description}>{sanitizedDescription}</p>}
      </div>
    </article>
  )
}
