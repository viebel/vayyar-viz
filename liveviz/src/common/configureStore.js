import thunkMiddleware from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, compose, applyMiddleware } from 'redux'
import app  from '../reducers/index'
import { loadState, saveState } from '../common/localStorage'
import throttle from 'lodash/throttle'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = composeEnhancers(
    applyMiddleware(createDebounce(), thunkMiddleware)
  )
  const persistedState = loadState()
  const store = createStore(app, persistedState, enhancers)
  store.subscribe(throttle(
    () => saveState(store.getState(), ['screens', 'global']),
    1000)
  )
  return store
}


export default configureStore
