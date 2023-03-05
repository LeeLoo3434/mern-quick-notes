import sendRequest from '../utilities/send-request';

const BASE_URL = '/api/notes';

export function getAllNotes() {
  return sendRequest(BASE_URL);
}

export function createNote(newNoteData) {
  return sendRequest(BASE_URL, 'POST', newNoteData);
}

export function deleteNote(noteId) {
  return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE');
}
