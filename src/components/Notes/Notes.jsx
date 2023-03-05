import React, { useState, useEffect } from 'react';
import NoteForm from '../../components/NoteForm/NoteForm';
import { getNotes, addNote } from '../../utilities/notes-service';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesData = await getNotes();
      setNotes(notesData);
    };

    fetchNotes();
  }, []);

  const handleAddNote = async (noteText) => {
    const newNote = await addNote({
      text: noteText,
      createdAt: new Date(),
    });
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              {note.text} - {new Date(note.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

