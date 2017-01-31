const React = require('react')
const { connect } = require('react-redux')

const NotesList = ({ notes }) =>
  <ul className='list-unstyled'>
    { notes.map(({ id, timestamp, text }) =>
        <li key={ id }>
          <span className='small'>{ new Date(timestamp).toDateString() }</span>
          <p>{ text }</p>
        </li>
      ) }
  </ul>

const mapState = ({ notes }) => ({ notes })

module.exports = connect(mapState)(NotesList)
