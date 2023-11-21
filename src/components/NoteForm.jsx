// NoteForm.js
import React from "react";
import Button from "./formElement/Button";
import styles from "../css-modules/NoteForm.module.css";
import { useState } from "react";
const NoteForm = ({ onSubmit, onCancel }) => {
  const [noteContent, setNoteContent] = useState(""); // Estado local para el contenido de la nota
  const handleNoteChange = (event) => {
    setNoteContent(event.target.value); // Actualizar el estado con el texto ingresado
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
          value={noteContent} // Vincular el valor del textarea al estado noteText
          onChange={handleNoteChange} // Manejar cambios en el textarea
        />
        <Button type="submit">Add Note</Button>
        <Button onClick={onCancel} className={"buttonDark"}>Cancel</Button>
      </form>
    </div>
  );
};

export default NoteForm;
