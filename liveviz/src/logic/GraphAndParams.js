import { connect } from 'react-redux'
import { trackerScreenToggleRunning} from '../actions/TrackerScreenActions'
import GraphAndParamsUI from '../ui/GraphAndParamsUI';
import { toggleParamsDisplay} from '../actions/ParamsScreenActions'


const mapDispatchToProps = (dispatch) => {
  return {
    toggleRunning: () => {
      dispatch(trackerScreenToggleRunning())
    },
    toggleParams: () => {
      dispatch(toggleParamsDisplay())
    },
  }
}

const mapStateToProps = (state) => {
  return {
    running: state.screens.tracker.running,
    displayParams: state.screens.params.display
  }
}

const GraphAndParams = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphAndParamsUI)

export default GraphAndParams;
