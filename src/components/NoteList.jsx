import React from 'react';
import Button from './formElement/Button';
import styles from "../css-modules/NoteList.module.css"
import { UserAuth } from '../context/AuthContext';
import AddButton from './formElement/AddButton';
function NoteList({ notes, showAddNoteFormHandler }) {
    const { user } = UserAuth();
  
    // Filtra las notas que pertenecen al usuario actual
// Filtra las notas que pertenecen al usuario actual
const userNotes = notes.filter((note) => note.user === user?.uid);

    const handleEditNote = (id) => {
      console.log('Editar nota con ID:', id);
      // Puedes llamar a una función que maneje la edición de la nota aquí
    };
  
    const handleDeleteNote = (id) => {
      console.log('Eliminar nota con ID:', id);
      // Puedes llamar a una función que maneje la eliminación de la nota aquí
    };
  
    return (
      <>
      <AddButton onClick={showAddNoteFormHandler}/>
      <div className={styles.noteListContainer}>
        <h2 className={styles.noteListTitle}>Lista de Notas</h2>
        <ul className={styles.noteList}>
          {userNotes.map((note) => (
            <li key={note.id} className={styles.noteListItem}>
              <div>
                <strong>Fecha:</strong> {note.date.toDate().toLocaleString()} <br />
                <strong>Usuario:</strong> {note.user} <br />
                <strong>Datos de la nota:</strong> {note.data}
              </div>
              <div>
                <button onClick={() => handleEditNote(note.id)}>Editar</button>
                <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  }
  
  export default NoteList;