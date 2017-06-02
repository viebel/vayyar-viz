import { connect } from 'react-redux'
import { trackerScreenToggleRunning, trackerAppScreenSetView} from '../actions/TrackerScreenActions'
import GraphAndParamsUI from '../ui/GraphAndParamsUI';
import { toggleParamsDisplay } from '../actions/ParamsScreenActions'


const mapDispatchToProps = (dispatch) => ({
  toggleRunning() {
    dispatch(trackerScreenToggleRunning())
  },
  toggleParams() {
    dispatch(toggleParamsDisplay())
  },
  setViewMode(viewMode) {
    dispatch(trackerAppScreenSetView(viewMode))
  },
})

const mapStateToProps = (state) => ({
  running: state.screens.tracker.running,
  displayParams: state.screens.params.display,
  view: state.screens.trackerApp.view,
})

const GraphAndParams = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphAndParamsUI)

export default GraphAndParams;
