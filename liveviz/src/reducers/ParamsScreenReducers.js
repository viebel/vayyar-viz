import { assoc } from 'ramda'

const defaultState = {
    isParamEditable: false,
    display: true
}

export const params= (state=defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_DISPLAY_PARAMS':
    return assoc('display', !state.display, state)
    case 'PARAMS_SCREEN_SET_ERROR':
    return assoc('error', `Cannot connect to: ${action.val.url}`, state)
    case 'TOGGLE_PARAMS_STATUS':
    return assoc('isParamEditable', !state.isParamEditable, state)
    default:
    return state
  }
}
