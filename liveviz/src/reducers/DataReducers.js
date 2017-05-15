import { assocPath, assoc, findIndex, adjust, propEq } from 'ramda'

const defaultState = {
  tracker: {targets:[]},
  heatmap: [],
  params: {variables: []},
}

const updateParam = (params, name, value) => {
  const idx = findIndex(propEq('ActualName', name), params)
  if(idx === -1) {
    return params
  }
  return adjust(assoc('Value',value), idx)(params)
}

export const data = (state=defaultState, action) => {
  switch(action.type) {
    case 'DATA_UPDATE_TRACKER':
    return assoc('tracker', action.val, state)
    case 'DATA_UPDATE_HEATMAP':
    return assoc('heatmap', action.val, state)
    case 'DATA_UPDATE_PARAMS':
    return assoc('params', action.val, state)
    case 'DATA_UPDATE_PARAM':
    return assocPath(['params', 'variables'], updateParam(state.params.variables, action.val.name, action.val.value), state)
    default:
    return state
  }
}
