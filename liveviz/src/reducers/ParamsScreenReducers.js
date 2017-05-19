import { merge, assoc } from 'ramda'

const defaultState = {
    isParamEditable: false,
}

export const params= (state=defaultState, action) => {
  switch(action.type) {
    case 'PARAMS_SCREEN_SET_ERROR':
    return assoc('error', `Cannot connect to: ${action.val.url}`, state)
    case 'SET_PARAMS_STATUS':
    return merge(state, {isParamEditable : !state.isParamEditable})
    default:
    return state
  }
}
