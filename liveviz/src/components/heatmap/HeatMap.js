import HeatMapFetchUI from './HeatMapFetchUI';
import { connect } from 'react-redux'
import { updateHeatMapData } from '../../actions/DataActions'
import { trackerScreenSetError, trackerScreenSetConnected } from '../../actions/TrackerScreenActions'

const mapDispatchToProps = (dispatch) => ({
  onSuccess(data) {
    dispatch(updateHeatMapData(data))
    dispatch(trackerScreenSetConnected())
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
    data: state.data.heatmap,
    url: `${state.global.serverRoot}/sliceBot`,
    phase: localState.phase,
    display: state.screens.display,
  }
}

const HeatMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatMapFetchUI)

export default HeatMap
