import TrackerFetchUI from '../ui/TrackerUI'
import { connect } from 'react-redux'
import { setConnectionStatus, x§trackerScreenUpdateData, trackerScreenSetError} from '../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (data) => {
      dispatch(trackerScreenUpdateData(data))
      dispatch(setConnectionStatus('connected'))
    },
    onError: (reason, url) => {
      dispatch(trackerScreenSetError(reason, url))
    }
  }
}

const mapStateToProps = (state) => {
  const localState = state.screens.tracker;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    targets: localState.targets,
    url: `${state.global.serverRoot}/Targets`,
    running: localState.running,
  }
}

const Tracker = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerFetchUI)

export default Tracker;
