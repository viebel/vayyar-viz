import TrackerFetchUI from '../ui/TrackerFetchUI'
import { connect } from 'react-redux'
import { trackerScreenSetError, trackerScreenSetConnected } from '../../../actions/TrackerScreenActions'
import { updateTrackerData } from '../../../actions/DataActions'
import { setConnectionStatus} from '../../../actions/GlobalActions'


const mapDispatchToProps = (dispatch) => ({
  onSuccess(data) {
    dispatch(updateTrackerData(data))
    dispatch(trackerScreenSetConnected())
    dispatch(setConnectionStatus('connected'))
  },
  onError(reason, url) {
    dispatch(trackerScreenSetError(reason, url))
  },
})

const mapStateToProps = (state) => {
  const localState = state.screens.tracker;
  return {
    status: state.global.connectionStatus,
    error: localState.message,
    targets: state.data.tracker,
    room: state.data.trackerInit,
    display: state.screens.display,
    url: `${state.global.serverRoot}/Tracker_Update`,
    phase: localState.phase,
  }
}

const Tracker = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerFetchUI)

export default Tracker;
