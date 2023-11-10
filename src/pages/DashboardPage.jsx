import React from 'react'
import Header from '../components/common/Header';
import styles from "../css-modules/DashboardPage.module.css";
function DashboardPage() {
  return (
    <> <Header />
    <div className={styles.pageContainer}>
    <main className={styles.mainContent}>
      <h1>Dashboard Page</h1>
    </main>
  </div>
  </>
  )
}

export default DashboardPage;
