const notesLoaded = notes => ({ type: 'NOTES_LOADED', notes })

const loadNotes = () => dispatch => {
  fetch('/notes', {
    headers: { 'Accept': 'application/json' }
  })
  .then(res => res.json())
  .then(notes => dispatch(notesLoaded(notes)))
}

const newNoteUpdated = value => ({ type: 'NEW_NOTE_UPDATED', value })

const noteSaved = note => ({ type: 'NOTE_SAVED', note })

const saveNote = () => (dispatch, getState) => {
  const { newNote } = getState()
  fetch('/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: newNote })
  })
  .then(res => res.json())
  .then(note => dispatch(noteSaved(note)))
}

module.exports = {
  notesLoaded,
  loadNotes,
  newNoteUpdated,
  saveNote,
  noteSaved
}
