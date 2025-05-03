import { cn } from '@/utilities/ui'
import React from 'react'
import { Card, CardPostData } from '@/components/Card'
import styles from './Collection.module.css'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = ({ posts }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.gridLayout}>
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div key={index}>
                <Card className="h-full" doc={result} relationTo="posts" showCategories />
              </div>
            )
          }
          return null
        })}
      </div>
    </section>
  )
}
