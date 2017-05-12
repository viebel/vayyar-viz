import { combineReducers } from 'redux'
import { assocPath, assoc, merge, findIndex, adjust, propEq } from 'ramda'

const defaultGlobal = {
  serverRoot: 'http://209.9.36.2:1234',
  connectionStatus: 'disconnected',
  graphKey: 0,
}

const global = (state=defaultGlobal, action) => {
  switch(action.type) {
    case 'SET_SERVER_ROOT':
    return merge(state, {serverRoot: action.val, graphKey: state.graphKey + 1})
    case 'SET_CONNECTION_STATUS':
    return assoc('connectionStatus', action.val, state)
    default:
    return state
  }
}

const defaultTrackerScreen = {
  running: true,
  targets:[]
}

const defaultData = {
  tracker: {targets:[]},
  heatmap: [],
  params: {variables: []},
}

const defaultParamsScreen = {
}

const updateParam = (params, name, value) => {
  const idx = findIndex(propEq('ActualName', name), params)
  return adjust(assoc('Value',value), idx)(params)
}

const data=(state=defaultData, action) => {
  switch(action.type) {
    case 'DATA_UPDATE_TRACKER':
    return assoc('tracker', action.val, state)
    case 'DATA_UPDATE_HEATMAP':
    return assoc('heatmap', action.val, state)
    case 'DATA_UPDATE_PARAMS':
    return assoc('params', action.val, state)
    case 'DATA_UPDATE_PARAM':
    return assocPath(['params', 'variables'], updateParam(state.params.variables, action.val.name, action.val.value), state)
    default:
    return state
  }
}

const trackerScreen = (state=defaultTrackerScreen, action) => {
  switch(action.type) {
    case 'TRACKER_SCREEN_TOGGLE_RUNNING':
    return assoc('running', !state.running, state)
    case 'PARAMS_SCREEN_TOGGLE_PREVENT_FETCH':
    return assoc('preventFetch', action.val, state)
    case 'TRACKER_SCREEN_SET_ERROR':
    return assoc('error', `Cannot connect to: ${action.val.url}`, state)
    default:
    return state
  }
}

const paramsScreen= (state=defaultParamsScreen, action) => {
  switch(action.type) {
    case 'PARAMS_SCREEN_SET_ERROR':
    return assoc('error', `Cannot connect to: ${action.val.url}`, state)
    default:
    return state
  }
}
const app = combineReducers({
  global,
  data,
  screens: combineReducers({tracker: trackerScreen, params: paramsScreen}),
})


export default app
