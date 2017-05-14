import { assoc, map } from 'ramda';

export const setServerRoot = (url) => {
  console.log("url: " + url)
  return {
    type: 'SET_SERVER_ROOT',
    val: url,
  }
}

export const setConnectionStatus = (status) => {
  return {
    type: 'SET_CONNECTION_STATUS',
    val: status,
  }
}

export const trackerScreenToggleRunning = () => {
  return {
    type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
  }
}

export const trackerScreenUpdateData = (data) =>  {
  return {
    type: 'DATA_UPDATE_TRACKER',
    val: data,
  }
}

export const updateHeatMapData = (data) => {
  return {
    type: 'DATA_UPDATE_HEATMAP',
    val: data,
  }
}

export const trackerScreenSetError = (reason, url) => {
  return {
    type: 'TRACKER_SCREEN_SET_ERROR',
    val: {reason, url},
  }
}

export const updateParamsData = (data) => {
  return {
    type: 'DATA_UPDATE_PARAMS',
    val: data,
  }
}

export const paramsScreenSetError = (reason, url) => {
  return {
    type: 'PARAMS_SCREEN_SET_ERROR',
    val: {reason, url},
  }
}

export const paramsScreenTogglePreventFetch = (prevent) => {
  return {
    type: 'PARAMS_SCREEN_TOGGLE_PREVENT_FETCH',
    val: prevent,
  }
}

const paramsForServer = (params) => {
  const paramsRequestId = 'UpdateConfigurationEditor';
  const paramsRequestTypeId = 'MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
  const paramsForServer = params.map(p => {
    return {
      ActualName: p.ActualName,
      Value: p.Value,
    }
  })

  return {
    variables : paramsForServer,
    ID : paramsRequestId,
    __jTypeID : paramsRequestTypeId,
  }
}

const sendParamsToServer = (dispatch, url, params) => {
  dispatch(paramsScreenTogglePreventFetch(true))
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(paramsForServer(params))
  }).then(response => {
    dispatch(paramsScreenTogglePreventFetch(false))
  })
}

export const sendParams = () =>
(dispatch, getState) => {
  const state = getState(),
  params = state.data.params.variables,
  url = `${state.global.serverRoot}/post`

  return sendParamsToServer(dispatch, url, params)
}


const DEBOUNCE_DELAY_SEND_PARAMS = 300
export const debouncedSendParams = () => {
  const thunk = sendParams()
  thunk.meta = {
    debounce: {
      time: DEBOUNCE_DELAY_SEND_PARAMS,
      key: 'SEND_PARAMS'
    }
  }
  return thunk
}

const updateParamInState = (name, value) => {
  return {
    type: 'DATA_UPDATE_PARAM',
    val: {name, value}
  }
}

export const updateParam = (name, value) =>
dispatch => {
  dispatch(paramsScreenTogglePreventFetch(true))
  dispatch(updateParamInState(name, value))
  dispatch(debouncedSendParams())
}


export const resetParams = () =>
(dispatch, getState) => {
  const state = getState(),
  params = state.data.params.variables,
  defaultParams = map(p => assoc('Value', p.DefaultValue, p))(params),
  url = `${state.global.serverRoot}/post`

  return sendParamsToServer(dispatch, url, defaultParams)
}
