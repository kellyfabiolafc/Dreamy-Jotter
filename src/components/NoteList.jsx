import React from 'react';

function NoteList({ notes }) {
  return (
    <div>
      <h2>Lista de Notas</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>Fecha:</strong> {note.date.toDateString()} <br />
            <strong>Usuario:</strong> {note.user} <br />
            <strong>Datos de la nota:</strong> {note.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
