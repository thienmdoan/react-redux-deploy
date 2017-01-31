const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./store')
const NotesList = require('./notes-list')
const NewNote = require('./new-note')
const { loadNotes } = require('./actions')

ReactDOM.render(
  <Provider store={ store }>
    <div className='container'>
      <NotesList/>
      <NewNote/>
    </div>
  </Provider>,
  document.getElementById('app')
)

store.dispatch(loadNotes())
