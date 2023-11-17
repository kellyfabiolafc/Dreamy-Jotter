// NoteForm.js
import React from "react";
import Button from "./formElement/Button";
import styles from "../css-modules/NoteForm.module.css";

const NoteForm = ({ onSubmit, onCancel }) => {
  return (
    <div>
      <div className={`${styles.overlayForm} formNote`}></div>
      <form
        className={styles.overlayForm}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <p>What story do you want to tell in Dreamy Jotter today?</p>
        <textarea
          className={styles.textTarea}
          placeholder="Write your story here."
        />
        <Button type="submit">Add Note</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </form>
    </div>
  );
};

export default NoteForm;
