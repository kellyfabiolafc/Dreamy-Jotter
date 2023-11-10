import React from 'react';
import styles from "../../css-modules/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>Dreamy Jotter</div>
    <button className={styles.logoutButton}>
      <FaSignOutAlt /> Salir
    </button>
  </header>
  )
}

export default Header