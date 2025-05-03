import type { Metadata } from 'next'

// import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import styles from './BlogPage.module.css'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <PageClient />
          <PayloadRedirects disableNotFound url={url} />
          {draft && <LivePreviewListener />}
          <PostHero post={post} />

          {/* LEFT: Main Post Content */}
          <div className={styles.mainContent}>
            <RichText
              className="prose prose-invert max-w-none"
              data={post.content}
              enableGutter={false}
            />
          </div>
        </article>

        {/* RIGHT: Sidebar - Related Posts */}
        <aside className={styles.sidebar}>
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className={styles.relatedWrapper}>
              <h3 className={styles.relatedHeading}>What&apos;s Next</h3>
              <div className={styles.relatedList}>
                {post.relatedPosts
                  .filter((rel) => typeof rel === 'object')
                  .map((related: any, index: number) => (
                    <a href={`/posts/${related.slug}`} key={index} className={styles.relatedItem}>
                      <div className={styles.relatedImage}>
                        {related?.heroImage?.url && (
                          <img
                            src={related.heroImage.url}
                            alt={related.title}
                            className={styles.relatedImgTag}
                          />
                        )}
                      </div>
                      <div className={styles.relatedContent}>
                        <h4>{related.title}</h4>
                        <p>{related.meta?.description || ''}</p>
                        <p className="readMore">Read More</p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    select: {
      // Add this
      slug: true,
      title: true,
      heroImage: true,
      content: true,
      meta: {
        description: true,
        title: true,
        keywords: true,
      },
      // Add other fields as you need them for rendering
    },
  })
  return result.docs?.[0] || null
})
