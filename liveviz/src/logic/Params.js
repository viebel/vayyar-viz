import { groupBy, split, head} from 'ramda';
import { connect } from 'react-redux'
import { setParamsStatus, paramsScreenSetError } from '../actions/ParamsScreenActions'
import { updateParamsData } from '../actions/DataActions'
import { debouncedSendParams, sendParams, resetParams, updateParam } from '../actions/ParamsScreenActions'

import ParamsFetchUI from '../ui/ParamsUI';

const paramsByCategory = params => groupBy(p => head(split('.', p.VisibleName)))(params)

const mapDispatchToProps = (dispatch) => {
  return {
    sendParams: () => {
      dispatch(sendParams())
    },
    changeParamsStatus: () => {
      dispatch(setParamsStatus())
    },
    resetParams: () => {
      dispatch(resetParams())
    },
    onSuccess: (data) => {
      dispatch(updateParamsData(data))
    },
    onError: (reason, url) => {
      dispatch(paramsScreenSetError(reason, url))
    },
    updateParam: (name, value) => {
      dispatch(debouncedSendParams())
      dispatch(updateParam(name, value))
    }
  }
}

const FETCH_PARAMS_INTERVAL = 5000

const mapStateToProps = (state) => {
  const localState = state.screens.params;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    preventFetch: localState.preventFetch,
    interval: FETCH_PARAMS_INTERVAL,
    params: state.data.params,
    paramsByCategory: paramsByCategory(state.data.params.variables),
    isEditable: localState.isParamEditable,
    url: `${state.global.serverRoot}/post`,
    urlGetParams: `${state.global.serverRoot}/UpdateConfigurationEditor`,

  }
}

const Params = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParamsFetchUI)

export default Params
