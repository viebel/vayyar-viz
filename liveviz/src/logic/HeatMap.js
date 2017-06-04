import HeatMapFetchUI from '../ui/HeatMapUI';
import { connect } from 'react-redux'
import { updateHeatMapData } from '../actions/DataActions'
import { trackerScreenSetError} from '../actions/TrackerScreenActions'

const mapStateToProps = (state) => {
  const localState = state.screens.tracker;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    data: state.data.heatmap,
    url: `${state.global.serverRoot}/demoData2`,
    running: localState.running,
  }
}

const HeatMap = connect(
  mapStateToProps,
  {
    onSuccess: updateHeatMapData,
    onError: trackerScreenSetError,
  }
)(HeatMapFetchUI)

export default HeatMap;
