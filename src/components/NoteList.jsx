import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import { updateNote, deleteNote } from '../services/fireBaseConfig';
import styles from "../css-modules/NoteList.module.css";
import { UserAuth } from '../context/AuthContext';
import AddButton from './formElement/AddButton';

function NoteList({ notes, showAddNoteFormHandler }) {
  const { user } = UserAuth();
  const [userNotes, setUserNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null);

  useEffect(() => {
    // Filtra las notas que pertenecen al usuario actual
    const filteredNotes = notes.filter((note) => note.user === user?.uid);
    setUserNotes(filteredNotes);
  }, [notes, user]);

  const handleEditNote = (id) => {
    setEditNoteId(id);
  };

  const handleCancelEdit = () => {
    setEditNoteId(null);
  };

  const handleEditFormSubmit = async (editedContent) => {
    try {
      console.log('Editar nota con ID:', editNoteId);

      // Llama a la función para editar la nota
      await updateNote(editNoteId, { data: editedContent });

      // Actualiza el estado después de la edición
      setUserNotes((prevNotes) =>
        prevNotes.map((note) => (note.id === editNoteId ? { ...note, data: editedContent } : note))
      );

      // Sale del modo de edición
      setEditNoteId(null);
    } catch (error) {
      console.error('Error al editar la nota:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      console.log('Eliminar nota con ID:', id);
      await deleteNote(id);

      // Actualiza el estado después de la eliminación
      setUserNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Error al eliminar la nota:', error);
    }
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
                {editNoteId === note.id ? (
                  // Renderiza el formulario de edición si estamos editando esta nota
                  <NoteForm
                    onSubmit={handleEditFormSubmit}
                    onCancel={handleCancelEdit}
                    submitButtonText="Save Note"
                    cancelButtonText="Cancel"
                    initialNoteContent={note.data}
                    
                  />
                ) : (
                  // Renderiza los botones de editar y eliminar si no estamos editando esta nota
                  <>
                    <button onClick={() => handleEditNote(note.id)}>Editar</button>
                    <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NoteList;
