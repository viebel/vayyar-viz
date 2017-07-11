import { merge, assoc } from 'ramda'

const defaultState = {
  serverRoot: 'http://192.168.100.167:1234',
  connectionStatus: 'connected',
  graphKey: 0,
}

const g = (state=defaultState, action) => {
  switch(action.type) {
    case 'SET_SERVER_ROOT':
    return merge(state, {serverRoot: action.val, graphKey: state.graphKey + 1});
    case 'SET_CONNECTION_STATUS':
    return assoc('connectionStatus', action.val, state);
    default:
    return state
  }
}

export default g
