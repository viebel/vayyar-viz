import { connect } from 'react-redux'
import { trackerScreenSetError, trackerScreenSetConnected } from 'actions/TrackerScreenActions'
import { updateParamsData } from 'actions/DataActions'
import { toggleParamsStatus, debouncedSendParams, sendParams, resetParams, updateParam } from 'actions/ParamsScreenActions'
import { getParamsByCategory } from 'reducers'
import ParamsFetchUI from '../ui/ParamsFechUI'


const mapDispatchToProps = (dispatch) => ({
  sendParams() {
    dispatch(sendParams())
  },
  changeParamsStatus() {
    dispatch(toggleParamsStatus())
  },
  resetParams() {
    dispatch(resetParams())
  },
  onSuccess(data) {
    dispatch(updateParamsData(data))
    dispatch(trackerScreenSetConnected())
  },
  onError(reason, url) {
    dispatch(trackerScreenSetError(reason, url))
  },
  updateParam(name, value) {
    dispatch(debouncedSendParams())
    dispatch(updateParam(name, value))
  },
})

const FETCH_PARAMS_INTERVAL = 5000

const mapStateToProps = (state) => {
  const localState = state.screens.params;
  return {
    status: state.global.connectionStatus,
    phase: state.screens.tracker.phase,
    interval: FETCH_PARAMS_INTERVAL,
    params: state.data.params,
    paramsInit: state.data.paramsInit,
    paramsByCategory: getParamsByCategory(state),
    isEditable: localState.isParamEditable,
    urlGetParams: `${state.global.serverRoot}/UpdateConfigurationEditor`,
    urlPost: `${state.global.serverRoot}/post`,
  }
}

const Params = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParamsFetchUI)

export default Params
