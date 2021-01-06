import React from 'react'
import logo from '../../assets/svgs/logo.svg'
import styles from './index.module.scss'

function HomePage() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>基于React的前端架构Demo</p>
      </header>
    </div>
  )
}

export default HomePage
