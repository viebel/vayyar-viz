import { assoc  } from 'ramda'

const defaultState = {
  running: false,
  preventFetch: false,
  message: null,
}

export const tracker = (state=defaultState, action) => {
  switch(action.type) {
    case 'TRACKER_SCREEN_TOGGLE_RUNNING':
    return assoc('running', !state.running, state)
    case 'TRACKER_SCREEN_STOP_RUNNING':
    return assoc('running', false, state)
    case 'PARAMS_SCREEN_TOGGLE_PREVENT_FETCH':
    return assoc('preventFetch', action.val, state)
    case 'TRACKER_SCREEN_SET_MESSAGE':
    return assoc('message', action.message, state)
    default:
    return state
  }
}
