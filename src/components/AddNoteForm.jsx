import "../index.css";
import styled from "styled-components";
import React, { useState } from "react";
import Calendar from "react-calendar";
import Button from "./formElement/Button";
import { useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { createNote, getNotesByDate } from "../services/fireBaseConfig";
// import 'react-calendar/dist/Calendar.css';
import styles from "../css-modules/AddNoteForm.module.css";
import { UserAuth } from "../context/AuthContext";
const AddNoteForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const { user } = UserAuth();

  const handleDateChange = async (date) => {
    console.log('Fecha seleccionada:', date);
    setSelectedDate(date);
    const notes = await getNotesByDate(date);
    console.log('Notas obtenidas:', notes);
    setNotes(notes);
  };
  
  
  const handleAddNote = async (noteData) => {
    try {
      const noteId = await createNote(selectedDate, noteData, user.uid);
      console.log('Nota creada con ID:', noteId);
      setShowAddNoteForm(false);
      const updatedNotes = await getNotesByDate(selectedDate);
      console.log('Notas actualizadas:', updatedNotes);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error al agregar la nota:', error);
    }
  };
  

  const showAddNoteFormHandler = () => {
    setShowAddNoteForm(true);
  };

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const notes = await getNotesByDate(selectedDate);
        console.log('Notas cargadas correctamente:', notes);
        setNotes(notes);
      } catch (error) {
        console.error('Error al cargar notas:', error);
      }
    };
  
    loadNotes();
  }, [selectedDate]);
  return (
    <div className={styles.addNoteForm}>
      <CalendarContainer>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className={styles.calendar}
        />
      </CalendarContainer>

      {showAddNoteForm && (
        <NoteForm
        onSubmit={(noteData) => {
          handleAddNote(noteData);
          setShowAddNoteForm(false); // Oculta el formulario después de enviar la nota
        }}
        onCancel={() => setShowAddNoteForm(false)}
        />
      )}

  
{!showAddNoteForm && (
        <div className={styles.containerAlternative}>
          {notes.length > 0 ? (
            <NoteList notes={notes} />
          ) : (
            <>
              <p>No hay notas para hoy.</p>
              <Button onClick={showAddNoteFormHandler}>Agregar nota</Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AddNoteForm;
const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  background-color: transparent;
  padding: 10px;
  border-radius: 3px;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }
  .react-calendar {
    background-color: white;
    border-radius: 10px;
  }
  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: var(--first-color-light);
    border: 0;
    border-radius: 3px;
    color: white;

    &:hover {
      background-color: var(--first-color);
    }

    &:active {
      background-color: var(--first-color-dark);
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 2px !important;
    flex-wrap: nowrap !important;
    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__tile--range {
      box-shadow: 0 0 4px 1px black;
      background-color: var(--first-color);
    }
  }

  .react-calendar__year-view {
    .react-calendar__year-view__months {
      display: grid !important;
      flex: initial !important;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      flex-wrap: nowrap !important;
    }
  }
  .react-calendar__century-view {
    .react-calendar__century-view__decades {
      display: grid !important;
      flex: initial !important;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      flex-wrap: nowrap !important;
    }
  }
  .react-calendar__decade-view {
    .react-calendar__decade-view__years {
      display: grid !important;
      flex: initial !important;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      flex-wrap: nowrap !important;
    }
  }
  /* ~~~ other view styles ~~~ */
`;
