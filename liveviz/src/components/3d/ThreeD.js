import ThreeDFetchUI from './ThreeDFetchUI';
import { connect } from 'react-redux'
import { updateThreeDData } from '../../actions/DataActions'
import { trackerScreenSetError} from '../../actions/TrackerScreenActions'

const mapStateToProps = (state) => {
  const localState = state.screens.tracker;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    data: state.data.threeD,
    phase: state.screens.phase,
    view: state.screens.trackerApp.view,
    url: `${state.global.serverRoot}/surfaceImage`,
    running: localState.running,
  }
}
const ThreeD = connect(
  mapStateToProps,
  {
    onSuccess: updateThreeDData,
    onError: trackerScreenSetError,
  }
)(ThreeDFetchUI)

export default ThreeD
