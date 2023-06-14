import React from 'react'
import styles from "./styles.module.scss"

const Avatar = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.circle} ></div>
        <div className={styles.text}>0x4f...1f4</div>
    </div>
  )
}

export default Avatar