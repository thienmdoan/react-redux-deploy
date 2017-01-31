const React = require('react')
const { connect } = require('react-redux')
const { saveNote, newNoteUpdated } = require('./actions')

const NewNote = ({ newNote, handleChange, handleSubmit }) =>
  <form onSubmit={ handleSubmit }>
    <div className='form-group'>
      <textarea
        className='form-control'
        onChange={ handleChange }
        rows='6'
        value={ newNote }
        required/>
    </div>
    <button className='btn btn-success' type='submit'>Save</button>
  </form>

const mapState = ({ newNote }) => ({ newNote })

const mapDispatch = dispatch => ({
  handleChange: event => {
    const { value } = event.target
    dispatch(newNoteUpdated(value))
  },
  handleSubmit: event => {
    event.preventDefault()
    dispatch(saveNote())
  }
})

module.exports = connect(mapState, mapDispatch)(NewNote)
