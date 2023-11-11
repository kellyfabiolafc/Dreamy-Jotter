// AddNoteForm.jsx
import "../index.css";
import styled from "styled-components";
import React, { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import styles from "../css-modules/AddNoteForm.module.css";

const AddNoteForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Aquí podrías realizar otras acciones cuando cambie la fecha
  };

  const handleAddNote = (noteData) => {
    // Aquí podrías enviar los datos de la nota a Firebase u otro servicio
    console.log("Añadir nota para la fecha:", selectedDate, "Datos:", noteData);
  };

  return (
    <div className={styles.addNoteForm}>
      <CalendarContainer>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className={styles.calendar}
        />
      </CalendarContainer>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddNote();
        }}
      >
       
        <textarea placeholder="¿Qué historia quieres contar en Dreamy Jotter hoy?" />
        <button type="submit">Agregar Nota</button>
      </form>
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
.react-calendar{
background-color :white;
border-radius:10px;
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
      background-color:var(--first-color-dark);
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
      background-color:var(--first-color)
    }
  }

  .react-calendar__year-view {
    .react-calendar__year-view__months {
      display: grid !important;;
      flex: initial !important; 
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      flex-wrap: nowrap !important;
    }
  }
.react-calendar__century-view{
  .react-calendar__century-view__decades{
    display: grid !important;;
      flex: initial !important; 
      grid-template-columns: repeat(4, 1fr);
      gap: 2px; 
      flex-wrap: nowrap !important;
  }
}
  .react-calendar__decade-view{
    .react-calendar__decade-view__years{
        display: grid !important;;
      flex: initial !important; 
      grid-template-columns: repeat(4, 1fr);
      gap: 2px; 
      flex-wrap: nowrap !important;
    }
  }
  /* ~~~ other view styles ~~~ */
`;
