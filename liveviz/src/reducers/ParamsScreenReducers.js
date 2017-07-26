import { assoc } from 'ramda'

const defaultState = {
    isParamEditable: false,
    display: true
}

export const params= (state=defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_DISPLAY_PARAMS':
    return assoc('display', !state.display, state)
    case 'TOGGLE_PARAMS_STATUS':
    return assoc('isParamEditable', !state.isParamEditable, state)
    default:
    return state
  }
}
