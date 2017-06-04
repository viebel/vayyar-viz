import { assoc, assocPath } from 'ramda'

const defaultState = {
  view: 'singleMap',
  singleMapView : {
    layers: {
      raw: true,
      tracker: false,
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



const setLayers = (state, {view, mapIdx, layers}) => {
  switch(view) {
    case 'singleMap':
    return assocPath(['singleMapView', 'layers'], layers, state)
    case 'multipleMap':
    return assocPath(['multipleMapView', 'layers', mapIdx], layers, state)
    default: throw(new Error(`trackerAppLayers called with invalid view: ${view}`))
  }
}

export const trackerApp = (state=defaultState, action) => {
  switch(action.type) {
    case 'TRACKER_APP_SCREEN_SET_VIEW':
    return assoc('view', action.val, state)
    case 'TRACKER_APP_SCREEN_SET_LAYERS':
    return setLayers(state, action.val)
    default:
    return state
  }
}

export const trackerAppLayers = (state, view, mapIdx) => {
  switch(view) {
    case 'singleMap':
    return state.singleMapView.layers
    case 'multipleMap':
    return state.multipleMapView.layers[mapIdx]
    default: throw(new Error(`trackerAppLayers called with invalid view: ${view}`))
  }
}

export const trackerAppSlice = (state, view, mapIdx) => {
  switch(view) {
    case 'singleMap':
    return state.singleMapView.slice
    case 'multipleMap':
    return state.multipleMapView.slices[mapIdx]
    default: throw(new Error(`trackerAppSlice called with invalid view: ${view}`))
  }
}
