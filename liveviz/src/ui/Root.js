import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import '../styles/index.css'
import { v4 } from 'node-uuid'
import AppLogic from '../logic/App'

export const Root = ({Component, store}) =>
<AppContainer>
  <Provider store={ store }>
    <Component
      key={
        //TODO Yehonathan 2017, May 19: get rid of the key - without it hot reload doesn't work
        v4()
      }
      />
  </Provider>
</AppContainer>

export const App = AppLogic

export const nextApp = () => require('../logic/App').default
