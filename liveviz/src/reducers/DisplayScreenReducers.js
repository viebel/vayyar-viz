import { assoc } from 'ramda'

const defaultState = {
    flipped: false,
    rotated: false,
}

export const display= (state=defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_FLIP_DISPLAY':
    return assoc('flipped', !state.flipped, state)
    case 'TOGGLE_ROTATE_DISPLAY':
    return assoc('rotated', !state.rotated, state)
    default:
    return state
  }
}
