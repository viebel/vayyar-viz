import { connect } from 'react-redux'
import { trackerAppScreenSetView } from 'actions/TrackerScreenActions'
import TrackerAppUI from '../ui/TrackerAppUI';
import { toggleParamsDisplay } from 'actions/ParamsScreenActions'


const mapStateToProps = (state) => ({
  running: state.screens.tracker.running,
  displayParams: state.screens.params.display,
  view: state.screens.trackerApp.view,
  singleMapView: state.screens.trackerApp.singleMapView,
  multipleMapView: state.screens.trackerApp.multipleMapView,
})

const TrackerApp = connect(
  mapStateToProps,
  {
    toggleParams: toggleParamsDisplay,
    setViewMode: trackerAppScreenSetView
  }
)(TrackerAppUI)

export default TrackerApp;
