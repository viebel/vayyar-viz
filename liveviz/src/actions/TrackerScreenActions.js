
export const trackerScreenSetPhase = (value) =>
({
  type: 'TRACKER_SCREEN_SET_PHASE',
  val: value,
})

export const trackerScreenStopRunning = () =>
({
  type: 'TRACKER_SCREEN_STOP_RUNNING'
})

export const trackerScreenStopRunning = () =>
({
  type: 'TRACKER_SCREEN_STOP_RUNNING'
})

export const trackerScreenSetError = (reason, url) => ({
  type: 'TRACKER_SCREEN_SET_MESSAGE',
  message: `Cannot connect to: ${url}`,
})

export const trackerScreenSetConnected = () => ({
  type: 'TRACKER_SCREEN_SET_MESSAGE',
  message: 'Connected',
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

export const sendCommand = (button) =>
(dispatch, getState) => {
  let command
  const state = getState()

  if (button === 'Pause') {
    if (state.screens.tracker.phase === 'RUNNING') {
      command = 'Pause'
      dispatch(trackerScreenSetPhase('PAUSED'))
    } else {
      command = 'Start'
      dispatch(trackerScreenSetPhase('RUNNING'))
      dispatch(requestOutputTypes())
    }
  } else {
    if (button === 'Stop') {
      dispatch(trackerScreenSetPhase('STOPPED'))
    } else { // button === 'Exit'
      dispatch(trackerScreenSetPhase('DISCONNECTED'))
    }
    command = button
  }
  const url = `${state.global.serverRoot}/post`
  return sendCommandToServer(dispatch, url, command)
}
