

import React from 'react';
import styles from '../../css-modules/AddNoteForm.module.css';

const AddButton = ({ onClick }) => {
  return (
    <button className={styles.addButton} onClick={onClick}>
      <span className={styles.addIcon}>+</span>
    </button>
  );
};

export default AddButton;
