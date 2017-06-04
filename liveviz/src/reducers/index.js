import { combineReducers } from 'redux'
import global from './GlobalReducers'
import { screens, trackerAppLayers, trackerAppSlice } from './ScreensReducers'
import { data, paramsByCategory } from './DataReducers'

const app = combineReducers({
  global,
  data,
  screens
})


export default app

export const getParamsByCategory = state =>
paramsByCategory(state.data)

export const getTrackerAppLayers = (state, view, idx) =>
trackerAppLayers(state.screens, view, idx)

export const getTrackerAppSlice = (state, view, idx) =>
trackerAppSlice(state.screens, view, idx)
