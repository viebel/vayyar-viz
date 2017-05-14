import { connect } from 'react-redux'
import AppUI from '../ui/AppUI'
import { setServerRoot, setConnectionStatus } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onConnect: (url) => {
      dispatch(setServerRoot(url))
      dispatch(setConnectionStatus("connecting"))
    },
    updateStatus: (status) => {
      dispatch(setConnectionStatus(status))
    }
  }
}
const mapStateToProps = (state) => {
  return {
    url: state.global.serverRoot,
    status: state.global.connectionStatus,
    graphKey: state.global.graphKey,
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

export default App;
