const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: thunk } = require('redux-thunk')

const notes = (state = [], action) => {
  switch (action.type) {
    case 'NOTES_LOADED':
      return action.notes
    case 'NOTE_SAVED':
      return state.concat(action.note)
    default:
      return state
  }
}

const newNote = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTE_UPDATED':
      return action.value
    case 'NOTE_SAVED':
      return ''
    default:
      return state
  }
}

const reducer = combineReducers({ notes, newNote })

const store = createStore(reducer, applyMiddleware(thunk))

module.exports = store
