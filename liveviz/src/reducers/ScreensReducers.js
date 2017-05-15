import { tracker } from './TrackerScreenReducers'
import { params } from './ParamsScreenReducers'
import { combineReducers } from 'redux'

export const screens =  combineReducers({tracker, params})
