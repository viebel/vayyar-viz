import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './common/configureStore'
import { nextApp, Root, App } from './ui/Root'

const render = Component => {
  ReactDOM.render(
    <Root
      Component={ Component }
      store={  configureStore()}
      />,
    document.getElementById('root')
  )
}

const hotReload = () => {
  if (module.hot) {
    module.hot.accept('./logic/App', () => {
      render(nextApp())
    })
  }
}

render(App)
hotReload()
