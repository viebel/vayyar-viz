import { assoc  } from 'ramda'

const defaultState = {
  view: 'singleMap',
}

export const trackerApp = (state=defaultState, action) => {
  switch(action.type) {
    case 'TRACKER_APP_SCREEN_SET_VIEW':
    return assoc('view', action.val, state)
    default:
    return state
  }
}
