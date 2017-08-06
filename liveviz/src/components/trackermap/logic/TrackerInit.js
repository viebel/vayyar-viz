import TrackerInitFetchUI from '../ui/TrackerInitFetchUI'
import { connect } from 'react-redux'
import { trackerScreenSetError} from '../../../actions/TrackerScreenActions'
import { updateTrackerInitData } from '../../../actions/DataActions'
import { setConnectionStatus} from '../../../actions/GlobalActions'


const mapDispatchToProps = (dispatch) => ({
  onSuccess(data) {
    dispatch(updateTrackerInitData(data))
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
    error: localState.error,
    room: state.data.trackerInit,
    urlGetTrackerInit: `${state.global.serverRoot}/Tracker_Init`,
    running: localState.running,
  }
}

const TrackerInit = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerInitFetchUI)

export default TrackerInit;
