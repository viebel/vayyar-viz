import {  assoc } from 'ramda'

const defaultState = {
}

export const params= (state=defaultState, action) => {
  switch(action.type) {
    case 'PARAMS_SCREEN_SET_ERROR':
    return assoc('error', `Cannot connect to: ${action.val.url}`, state)
    default:
    return state
  }
}
