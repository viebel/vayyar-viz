import { connect } from 'react-redux'
import { trackerScreenToggleRunning, trackerAppScreenSetView} from '../actions/TrackerScreenActions'
import GraphAndParamsUI from '../ui/GraphAndParamsUI';
import { toggleParamsDisplay } from '../actions/ParamsScreenActions'


const mapStateToProps = (state) => ({
  running: state.screens.tracker.running,
  displayParams: state.screens.params.display,
  view: state.screens.trackerApp.view,
  singleMapView: state.screens.trackerApp.singleMapView,
  multipleMapView: state.screens.trackerApp.multipleMapView,
})

const GraphAndParams = connect(
  mapStateToProps,
  {
    toggleRunning: trackerScreenToggleRunning,
    toggleParams: toggleParamsDisplay,
    setViewMode: trackerAppScreenSetView
  }
)(GraphAndParamsUI)

export default GraphAndParams;
