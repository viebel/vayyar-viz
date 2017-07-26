import { tracker } from './TrackerScreenReducers'
import { params } from './ParamsScreenReducers'
import { trackerApp } from './TrackerAppReducers'
import { display } from './DisplayScreenReducers'
import * as trackerAppReducers  from './TrackerAppReducers'

import { combineReducers } from 'redux'

export const screens =  combineReducers({display, tracker, params, trackerApp})
export const trackerAppLayers = (state, view, idx) =>
trackerAppReducers.trackerAppLayers(state.trackerApp, view, idx)
export const trackerAppSlice = (state, view, idx) =>
trackerAppReducers.trackerAppSlice(state.trackerApp, view, idx)
