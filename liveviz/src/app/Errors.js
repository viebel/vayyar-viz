import { connect } from 'react-redux'
import ErrorsUI from './ErrorsUI'


const mapStateToProps = (state) => ({
    message: state.screens.tracker.message
  })

const Connection = connect(
  mapStateToProps)(ErrorsUI)

export default Connection
