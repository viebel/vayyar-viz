import { groupBy, split, head} from 'ramda';
import { connect } from 'react-redux'
import { sendParams, resetParams, updateParamsData, paramsScreenSetError, updateParam } from '../actions'

import ParamsFetchUI from '../ui/ParamsUI';

const paramsByCategory = params => groupBy(p => head(split('.', p.VisibleName)))(params)

const mapDispatchToProps = (dispatch) => {
  return {
    sendParams: (url, params) => {
      dispatch(sendParams(url, params))
    },
    resetParams: (url, params) => {
      dispatch(resetParams(url, params))
    },
    onSuccess: (data) => {
      dispatch(updateParamsData(data))
    },
    onError: (reason, url) => {
      dispatch(paramsScreenSetError(reason, url))
    },
    updateParam: (name, value) => {
      dispatch(updateParam(name, value))
    }
  }
}

const FETCH_PARAMS_INTERVAL = 500000000

const mapStateToProps = (state) => {
  const localState = state.screens.params;
  return {
    status: state.global.connectionStatus,
    error: localState.error,
    preventFetch: localState.preventFetch,
    interval: FETCH_PARAMS_INTERVAL,
    params: state.data.params,
    paramsByCategory: paramsByCategory(state.data.params.variables),
    url: `${state.global.serverRoot}/post`,
    urlGetParams: `${state.global.serverRoot}/UpdateConfigurationEditor`,
  }
}

const Params = connect(
  mapStateToProps,
  mapDispatchToProps
)(ParamsFetchUI)

export default Params
