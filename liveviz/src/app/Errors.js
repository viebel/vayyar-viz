import { connect } from 'react-redux'
import ErrorsUI from './ErrorsUI'


const mapStateToProps = (state) => ({
    error: state.screens.tracker.error
  })

const Connection = connect(
  mapStateToProps)(ErrorsUI)

export default Connection
