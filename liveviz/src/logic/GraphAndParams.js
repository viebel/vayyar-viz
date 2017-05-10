import { connect } from 'react-redux'
import { trackerScreenToggleRunning} from '../actions'
import GraphAndParamsUI from '../ui/GraphAndParamsUI';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleRunning: () => {
      dispatch(trackerScreenToggleRunning())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    running: state.screens.tracker.running,
  }
}

const GraphAndParams = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphAndParamsUI)

export default GraphAndParams;
