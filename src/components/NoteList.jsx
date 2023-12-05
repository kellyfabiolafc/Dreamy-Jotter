import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import { updateNote, deleteNote } from '../services/fireBaseConfig';
import styles from "../css-modules/NoteList.module.css";
import { UserAuth } from '../context/AuthContext';
import AddButton from './formElement/AddButton';

function NoteList({ notes, showAddNoteFormHandler }) {
  // Aquí estamos utilizando la función `UserAuth` para obtener la información del usuario.
// Destructuramos el objeto resultante para obtener la propiedad `user`.
const { user } = UserAuth();

// Utilizamos el estado para almacenar las notas del usuario y el ID de la nota que se está editando.
const [userNotes, setUserNotes] = useState([]);
// Inicialmente, se establece en `null` ya que no hay ninguna nota en modo de edición.
const [editNoteId, setEditNoteId] = useState(null);

// Este efecto se ejecuta cuando cambian las dependencias `notes` o `user`.
// Filtramos las notas para obtener solo aquellas que pertenecen al usuario actual y las almacenamos en el estado.
useEffect(() => {
  const filteredNotes = notes.filter((note) => note.user === user?.uid);
  setUserNotes(filteredNotes);
}, [notes, user]);

// Manejador para establecer el ID de la nota que se va a editar.
const handleEditNote = (id) => {
  setEditNoteId(id);
};

// Manejador para cancelar la edición, estableciendo el ID de edición de nota de nuevo a `null`.
const handleCancelEdit = () => {
  setEditNoteId(null);
};

// Función para manejar la presentación del formulario de edición
const handleEditFormSubmit = async (editedContent) => {
  try {
    // Registra en la consola el intento de edición con el ID de la nota
    console.log('Editar nota con ID:', editNoteId);

    // Llama a la función para editar la nota utilizando el servicio `updateNote`
    await updateNote(editNoteId, { data: editedContent });

    // Se actualiza el estado de las notas después de la edición
    setUserNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === editNoteId ? { ...note, data: editedContent } : note))
    );

    // Sale del modo de edición estableciendo el ID de edición de nota a `null`
    setEditNoteId(null);
  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante la edición
    console.error('Error al editar la nota:', error);
  }
};

// Función para manejar la eliminación de una nota :P
const handleDeleteNote = async (id) => {
  try {
    // Registra en la consola el intento de eliminación con el ID de la nota
    console.log('Eliminar nota con ID:', id);

    // Llama a la función para eliminar la nota utilizando el servicio `deleteNote`
    await deleteNote(id);

    // Actualiza el estado de las notas después de la eliminación
    setUserNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la eliminación
    console.error('Error al eliminar la nota:', error);
  }
};

  return (
    <>
      <AddButton showAddNoteFormHandler={showAddNoteFormHandler}/>
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
