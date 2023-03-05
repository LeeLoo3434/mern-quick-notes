import React, { useState } from 'react';
import { createNote } from '../../utilities/notes-service';

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newNote = await createNote({
        text
      });

      onAddNote && onAddNote(newNote);
      setText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noteText">Add Note:</label>
      <input
        type="text"
        id="noteText"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
