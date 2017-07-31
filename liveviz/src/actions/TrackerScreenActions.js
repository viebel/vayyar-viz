
export const trackerScreenToggleRunning = () =>
({
  type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
})

export const trackerScreenStopRunning = () =>
({
  type: 'TRACKER_SCREEN_STOP_RUNNING'
})

export const trackerScreenSetError = (reason, url) => ({
  type: 'TRACKER_SCREEN_SET_ERROR',
  val: {reason, url},
})

export const trackerScreenSetConnected = (reason, url) => ({
  type: 'TRACKER_SCREEN_SET_CONNECTED',
  val: {reason, url},
})

export const trackerAppScreenSetView = (viewMode) => ({
  type: 'TRACKER_APP_SCREEN_SET_VIEW',
  val: viewMode,
})

export const setTrackerAppLayers = (view, mapIdx, layers) => ({
  type: 'TRACKER_APP_SCREEN_SET_LAYERS',
  val: {
    view,
    mapIdx,
    layers,
  }
})

export const setTrackerAppSlice = (view, mapIdx, slice) => ({
  type: 'TRACKER_APP_SCREEN_SET_SLICE',
  val: {
    view,
    mapIdx,
    slice,
  }
})

const sendOutputsToServer = (dispatch, url, params) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(params)
  }).then(response => {
  }).catch( err => {
    console.log(`error in sendParamsToServer => url: ${url} err: ${err}`)
  })
}

const requestOutputTypes = () =>
(dispatch, getState) => {
  const state = getState()
  const outputData = (state.data.params.variables[0].Value === 'vCube') ? state.data.vCubeOutputs : state.data.vexOutputs
  const url = `${state.global.serverRoot}/post`

  return sendOutputsToServer(dispatch, url, outputData)
}

const commandForServer = (command) => {
  const commandRequestId = 'GenericCommand';
  const commandRequestTypeId = 'MatGUIInterfaces.GenericCommand, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';
  return {
    CommandType : command,
    ID :  commandRequestId,
    __jTypeID : commandRequestTypeId,
  }
}

const sendCommandToServer = (dispatch, url, command) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(commandForServer(command))
  }).catch( err => {
    console.log(`error in sendParamsToServer => url: ${url} err: ${err}`)
  })
}

export const sendCommand = (button, isRunning) =>
(dispatch, getState) => {
  let command;

  if (button === 'Pause') {
    command = isRunning ? 'Start' : 'Pause'
    if (command === 'Start') {
      dispatch(requestOutputTypes())
    }
    dispatch(trackerScreenToggleRunning())
  } else {
    command = button;
    dispatch(trackerScreenStopRunning())
  }
  const state = getState(),
  url = `${state.global.serverRoot}/post`
  return sendCommandToServer(dispatch, url, command)
}
