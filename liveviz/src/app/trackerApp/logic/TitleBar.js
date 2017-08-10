import { connect } from 'react-redux'
import TitleBarUI from '../ui/TitleBarUI';
import { trackerAppScreenSetView, sendCommand } from 'actions/TrackerScreenActions'
import { toggleParamsDisplay, resetOutputs } from 'actions/ParamsScreenActions'
import { toggleFlipDisplay, toggleRotateDisplay } from 'actions/DisplayScreenActions'
import { resetDataState } from 'actions/DataActions'


const mapStateToProps = (state) => ({
  phase: state.screens.tracker.phase,
  displayParams: state.screens.params.display,
  status: state.global.connectionStatus,
  error: state.screens.tracker.error,
  view: state.screens.trackerApp.view,
})


const TitleBar = connect(
  mapStateToProps,
  {
    resetOutputs: resetOutputs,
    resetDataState: resetDataState,
    toggleFlipDisplay: toggleFlipDisplay,
    toggleRotateDisplay: toggleRotateDisplay,
    sendCommand: sendCommand,
    toggleParams: toggleParamsDisplay,
    setViewMode: trackerAppScreenSetView
  }
)(TitleBarUI)

export default TitleBar;
