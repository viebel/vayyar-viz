import HeatMapFetchUI from '../ui/HeatMapUI';
import { connect } from 'react-redux'
import {updateHeatMapData, trackerScreenSetError} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSuccess: (data) => {
      dispatch(updateHeatMapData(data))
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
    data: state.data.heatmap,
    url: `${state.global.serverRoot}/demoData2`,
    running: localState.running,
  }
}

const HeatMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatMapFetchUI)

export default HeatMap;
