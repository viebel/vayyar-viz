import React from 'react'
import ReactDOM from 'react-dom'
import App from './logic/App'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import './styles/index.css'
import { v4 } from 'node-uuid'
import configureStore from './common/configureStore'


const store = configureStore()

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
