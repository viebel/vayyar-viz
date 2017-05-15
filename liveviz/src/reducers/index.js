import { combineReducers } from 'redux'
import { global } from './GlobalReducers'
import { screens } from './ScreensReducers'
import { data } from './DataReducers'

const app = combineReducers({
  global,
  data,
  screens
})


export default app
