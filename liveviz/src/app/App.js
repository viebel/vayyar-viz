import { connect } from 'react-redux'
import AppUI from 'app/AppUI'
import { setServerRoot, setConnectionStatus } from 'actions/GlobalActions'

const mapDispatchToProps = (dispatch) => ({
    onConnect(url)  {
      dispatch(setServerRoot(url))
      dispatch(setConnectionStatus("connecting"))
    },
    updateStatus(status) {
      dispatch(setConnectionStatus(status))
    }
  })

const mapStateToProps = (state) => ({
    url: state.global.serverRoot,
    status: state.global.connectionStatus,
    graphKey: state.global.graphKey,
  })

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI)

export default App
