import { merge, assoc } from 'ramda'

const defaultState = {
  serverRoot: 'http://209.9.36.2:1234',
  connectionStatus: 'connected',
  graphKey: 0,
  isParamEditable: false,
}

export const global = (state=defaultState, action) => {
  switch(action.type) {
    case 'SET_SERVER_ROOT':
    return merge(state, {serverRoot: action.val, graphKey: state.graphKey + 1});
    case 'SET_CONNECTION_STATUS':
    return assoc('connectionStatus', action.val, state);
    case 'SET_PARAMS_STATUS':
    return merge(state, {isParamEditable : !state.isParamEditable})
    default:
    return state
  }
}
