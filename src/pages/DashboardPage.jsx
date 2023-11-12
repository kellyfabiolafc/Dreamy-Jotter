import React from "react";
import Header from "../components/common/Header";
import AddNoteForm from "../components/AddNoteForm";
import styles from "../css-modules/DashboardPage.module.css";
function DashboardPage() {

  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <main className={styles.mainContent}>
          <AddNoteForm />
        </main>
      </div>
    </>
  );
}

export default DashboardPage;
