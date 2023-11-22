import React from 'react';
import Button from './formElement/Button';
import styles from "../css-modules/NoteList.module.css"


function NoteList({ notes,showAddNoteFormHandler }) {
    const handleEditNote = (id) => {
        // Lógica para editar la nota con el ID proporcionado
        console.log('Editar nota con ID:', id);
        // Puedes llamar a una función que maneje la edición de la nota aquí
      };
    
      const handleDeleteNote = (id) => {
        // Lógica para eliminar la nota con el ID proporcionado
        console.log('Eliminar nota con ID:', id);
        // Puedes llamar a una función que maneje la eliminación de la nota aquí
      };
  return (
    <div className={styles.noteListContainer}>
    <Button className={styles.addButton} onClick={showAddNoteFormHandler}>
      Agregar nota
    </Button>
    <h2 className={styles.noteListTitle}>Lista de Notas</h2>
    <ul className={styles.noteList}>
        {notes.map((note) => (
          <li key={note.id} className={styles.noteListItem}>
            <div>
              <strong>Fecha:</strong> {note.date.toDate().toLocaleString()} <br />
              <strong>Usuario:</strong> {note.user} <br />
              <strong>Datos de la nota:</strong> {note.data}
            </div>
            <div>
            <button onClick={() => handleEditNote(note.id)}>
              </button>
              <button onClick={() => handleDeleteNote(note.id)}>
              </button>
            </div>
          </li>
        ))}
      </ul>
  </div>
  );
}

export default NoteList;
