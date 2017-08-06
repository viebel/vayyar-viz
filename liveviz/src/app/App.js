import { connect } from 'react-redux'
import AppUI from 'app/AppUI'
import { setConnectionStatus } from 'actions/GlobalActions'

const mapDispatchToProps = (dispatch) => ({
    updateStatus(status) {
      dispatch(setConnectionStatus(status))
    }
  })

const mapStateToProps = (state) => ({
    status: state.global.connectionStatus,
    graphKey: state.global.graphKey,
  })

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

export default App
