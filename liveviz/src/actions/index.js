import { assoc, map } from 'ramda';
import { debounce } from 'throttle-debounce';

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

export const sendParams = (url, params) => {
  paramsScreenTogglePreventFetch(true)
  fetch(`${url}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(paramsForServer(params))
  }).then(response => {
    paramsScreenTogglePreventFetch(false)
  })
}

const DEBOUNCE_DELAY_SEND_PARAMS = 300
const debouncedSendParams = debounce(DEBOUNCE_DELAY_SEND_PARAMS, sendParams)

export const updateParam = (name, value) => {
  //paramsScreenTogglePreventFetch(true)
  //debouncedSendParams();
  return {
    type: 'DATA_UPDATE_PARAM',
    val: {name, value}
  }
}

export const resetParams = (url, params) => {
  const defaultParams = map(p => assoc('Value', p.DefaultValue, p))(params)
  sendParams(url, defaultParams)
}
