import React from 'react'
import ReactDOM from 'react-dom'
import App from './logic/App'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, compose, applyMiddleware } from 'redux'
import { AppContainer } from 'react-hot-loader'
import app  from './reducers/index'
import './styles/index.css'
import { v4 } from 'node-uuid'
import { loadState, saveState } from './common/localStorage'
import throttle from 'lodash/throttle'

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

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <Component
          key={ //TODO Yehonathan 2017, May 19: get rid of the key - without it hot reload doesn't work
            v4()}/>
        </Provider>
      </AppContainer>
      ,
      document.getElementById('root')
    )
  }

  render(App)

  if (module.hot) {
    module.hot.accept('./logic/App', () => {
      const NextApp = require('./logic/App').default
      render(NextApp)
    })
  }
