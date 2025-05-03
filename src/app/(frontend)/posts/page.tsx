import type { Metadata } from 'next/types'
import styles from './BlogMain.module.css'
import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className={styles.pageWrapper}>
      <PageClient />

      {/* Section Heading */}
      <section className={`${styles.section} ${styles.headingSection}`}>
        <h1 className={styles.headingTitle}>All Stories</h1>
        <p className={styles.headingSubtitle}>
          Dive into real conversations, shared meals, and beautifully unscripted dinner experiences.
          Explore our collection of stories.
        </p>
      </section>

      {/* Page Range */}
      <section className={`${styles.section} ${styles.rangeSection}`}>
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </section>

      {/* Post List */}
      <section className={`${styles.section} ${styles.archiveSection}`}>
        <CollectionArchive posts={posts.docs} />
      </section>

      {/* Pagination */}
      {posts.totalPages > 1 && posts.page && (
        <section className={`${styles.section} ${styles.paginationSection}`}>
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        </section>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Magic Table | Social Dining Experiences with Strangers',
    description:
      'Join Magic Table for unforgettable Saturday dinners with strangers in your city. No swiping, no pressure, just real conversations, surprise restaurants, and new connections every weekend.',
  }
}
