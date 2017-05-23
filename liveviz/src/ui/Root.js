import React from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import MainComponent from '../ui/Main'

export const Root = ({Component, store}) =>
<AppContainer>
  <Provider store={ store }>
    <Component/>
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
