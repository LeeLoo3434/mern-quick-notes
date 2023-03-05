import { getAllNotes, createNote, deleteNote } from './notes-api';

export async function fetchAllNotes() {
  const notes = await getAllNotes();
  return notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export async function addNewNote(newNoteData) {
  const newNote = await createNote(newNoteData);
  return newNote;
}

export async function removeNoteById(noteId) {
  await deleteNote(noteId);
}
