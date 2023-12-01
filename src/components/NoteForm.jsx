import React, { useState, useEffect } from "react";
import Button from "./formElement/Button";
import styles from "../css-modules/NoteForm.module.css";

const NoteForm = ({
  onSubmit,
  onCancel,
  submitButtonText,
  cancelButtonText,
  initialNoteContent,
}) => {
  const [noteContent, setNoteContent] = useState("");

  // useEffect para actualizar el contenido cuando cambia initialNoteContent
  useEffect(() => {
    setNoteContent(initialNoteContent);
  }, [initialNoteContent]);

  const handleNoteChange = (event) => {
    setNoteContent(event.target.value);
  };

  return (
    <div className={styles.overlayBackground}>
      <div className={`${styles.overlayForm} formNote`}></div>
      <form
        className={styles.overlayForm}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(noteContent);
        }}
      >
        <p>What story do you want to tell in Dreamy Jotter today?</p>
        <textarea
          className={styles.textTarea}
          placeholder="Write your story here."
          value={noteContent || ""}
          onChange={handleNoteChange}
        />
        <Button type="submit"  disabled={!noteContent || !noteContent.trim()}>{submitButtonText}</Button>
        <Button onClick={onCancel} className={"buttonDark"}>
          {cancelButtonText}
        </Button>
      </form>
    </div>
  );
};

export default NoteForm;



