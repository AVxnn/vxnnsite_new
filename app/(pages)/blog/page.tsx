import React from 'react'
import styles from "./blog.module.scss"
import BlogItem from '@/shared/components/blogItem/blogItem'

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
      {
        ['2', '2'].map((item: any, index: number) => {
          return (
            <BlogItem key={index} />
          )
        })
      }
      </div>
    </div>
  )
}

export default Blog