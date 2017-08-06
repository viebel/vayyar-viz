import { assoc, map } from 'ramda';

export const paramsScreenTogglePreventFetch = (prevent) => ({
  type: 'PARAMS_SCREEN_TOGGLE_PREVENT_FETCH',
  val: prevent,
})

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
  }).catch( err => {
    dispatch(paramsScreenTogglePreventFetch(false))
    console.log(`error in sendParamsToServer => url: ${url} err: ${err}`)
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

const updateParamInState = (name, value) => ({
  type: 'DATA_UPDATE_PARAM',
  val: {name, value}
})

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
  map(p => dispatch(updateParamInState(p.ActualName, p.DefaultValue)))(params)

  return sendParamsToServer(dispatch, url, defaultParams)
}

export const resetOutputs = () => {
  return updateParam('Cfg.ExternalGUI.OutputTypes', '{}')
}


export const toggleParamsStatus = () => ({
  type: 'TOGGLE_PARAMS_STATUS'
})

export const toggleParamsDisplay = () => ({
  type: 'TOGGLE_DISPLAY_PARAMS'
})
