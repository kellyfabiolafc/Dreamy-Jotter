

import React from 'react';
import styles from '../../css-modules/AddNoteForm.module.css';

const AddButton = ({ showAddNoteFormHandler }) => {
  return (
    <button className={styles.addButton} onClick={showAddNoteFormHandler}>
      <span className={styles.addIcon}>+</span>
    </button>
  );
};

export default AddButton;
