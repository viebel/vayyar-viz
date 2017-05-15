import { assoc  } from 'ramda'

const defaultState = {
  running: true,
}

export const tracker = (state=defaultState, action) => {
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
