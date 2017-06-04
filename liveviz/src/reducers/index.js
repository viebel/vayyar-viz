import { combineReducers } from 'redux'
import global from './GlobalReducers'
import { screens } from './ScreensReducers'
import { data, paramsByCategory } from './DataReducers'

const app = combineReducers({
  global,
  data,
  screens
})


export default app

export const getParamsByCategory = state =>
paramsByCategory(state.data)
