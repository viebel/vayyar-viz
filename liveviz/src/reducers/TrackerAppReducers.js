import { assoc  } from 'ramda'

const defaultState = {
  view: 'singleMap',
  singleMapView : {
    layers: {
      raw: true,
      tracker: true,
    },
    slice: "XY",
  },
  multipleMapView : {
    slices: ["XY", "XY", "XZ", "XZ"],
    layers: [
      {raw: true},
      {tracker:true},
      {tracker:true},
      {raw:true, tracker:true}
    ]
  }
}

export const trackerApp = (state=defaultState, action) => {
  switch(action.type) {
    case 'TRACKER_APP_SCREEN_SET_VIEW':
    return assoc('view', action.val, state)
    default:
    return state
  }
}
