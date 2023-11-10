// AddNoteForm.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../css-modules/AddNoteForm.module.css';

const AddNoteForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Aquí podrías realizar otras acciones cuando cambie la fecha
  };

  const handleAddNote = (noteData) => {
    // Aquí podrías enviar los datos de la nota a Firebase u otro servicio
    console.log('Añadir nota para la fecha:', selectedDate, 'Datos:', noteData);
  };

  return (
    <div className={styles.addNoteForm}>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        className={styles.calendar}
      />
      <form onSubmit={(e) => { e.preventDefault(); handleAddNote(/* datos del formulario */); }}>
        {/* Campos del formulario */}
        <textarea placeholder="¿Qué historia quieres contar en Dreamy Jotter hoy?" />
        <button type="submit">Agregar Nota</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
