import React from 'react';
import styles from "../../css-modules/Header.module.css";
import logo from "../../assets/dark-logo.png";
import 'boxicons';
function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.logoContainer}>
        <img src={logo} alt="Dreamy Jotter Logo" className={styles.logo} />
        <div className={styles.title}>Dreamy Jotter</div>
      </div>
    <box-icon name='log-out'></box-icon>
  </header>
  )
}

export default Header