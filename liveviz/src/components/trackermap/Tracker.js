import TrackerFetchUI from './TrackerUI'
import { connect } from 'react-redux'
import { trackerScreenSetError} from '../../actions/TrackerScreenActions'
import { updateTrackerData } from '../../actions/DataActions'
import { setConnectionStatus} from '../../actions/GlobalActions'


const mapDispatchToProps = (dispatch) => ({
  onSuccess(data) {
    dispatch(updateTrackerData(data))
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
    targets: state.data.tracker.targets,
    url: `${state.global.serverRoot}/Targets`,
    running: localState.running,
  }
}

const Tracker = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackerFetchUI)

export default Tracker;
