import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { v4 } from 'node-uuid'
import MainComponent from '../ui/Main'

export const Root = ({Component, store}) =>
<AppContainer>
  <Provider store={ store }>
    <Component
      key={
        //TODO Yehonathan 2017, May 19: get rid of the key - without it hot reload doesn't work
        v4()
      }/>
  </Provider>
</AppContainer>


export const hotReload = (render) => {
  if (module.hot) {
    module.hot.accept('../ui/Main', () => {
      const NextApp = require('../ui/Main').default
      render(NextApp)
    })
  }
}

export const Main = MainComponent
