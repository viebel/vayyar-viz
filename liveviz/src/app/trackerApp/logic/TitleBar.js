import { connect } from 'react-redux'
import TitleBarUI from '../ui/TitleBarUI';
import { trackerScreenToggleRunning, trackerAppScreenSetView} from 'actions/TrackerScreenActions'
import { toggleParamsDisplay } from 'actions/ParamsScreenActions'


const mapStateToProps = (state) => ({
  running: state.screens.tracker.running,
  displayParams: state.screens.params.display,
  status: state.global.connectionStatus,
  error: state.screens.tracker.error,
  view: state.screens.trackerApp.view,
})


const TitleBar = connect(
  mapStateToProps,
  {
    toggleRunning: trackerScreenToggleRunning,
    toggleParams: toggleParamsDisplay,
    setViewMode: trackerAppScreenSetView
  }
)(TitleBarUI)

export default TitleBar;
