import { connect } from 'react-redux'
import GraphSectionUI from './GraphSectionUI';
import { setConnectionStatus } from 'actions/GlobalActions'


const mapStateToProps = (state) => ({
  running: state.screens.tracker.running,
  url: state.global.serverRoot,
  status: state.global.connectionStatus,
  view: state.screens.trackerApp.view,
  singleMapView: state.screens.trackerApp.singleMapView,
  multipleMapView: state.screens.trackerApp.multipleMapView,
})

const mapDispatchToProps = (dispatch) => ({
    updateStatus(status) {
      dispatch(setConnectionStatus(status))
    }
  })

const GraphSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphSectionUI)

export default GraphSection;
