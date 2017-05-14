import React from 'react'
import ReactDOM from 'react-dom'
import App from './logic/App'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, compose, applyMiddleware } from 'redux'
import app  from './reducers/index'
import './styles/index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(app, composeEnhancers(
  applyMiddleware(createDebounce(), thunkMiddleware))
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
