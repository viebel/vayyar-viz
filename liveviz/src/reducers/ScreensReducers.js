import { tracker } from './TrackerScreenReducers'
import { params } from './ParamsScreenReducers'
import { trackerApp } from './TrackerAppReducers'

import { combineReducers } from 'redux'

export const screens =  combineReducers({tracker, params, trackerApp})
