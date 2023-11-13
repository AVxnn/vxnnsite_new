import React from 'react'
import styles from "./searchHeader.module.scss"
import Search from '@/public/icons/search'

const SearchHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Search />
        <input type="text" placeholder='Поиск' className={styles.input} />
      </div>
    </div>
  )
}

export default SearchHeader