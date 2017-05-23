import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './common/configureStore'
import { hotReload, Root, Main } from './ui/Root'

const render = Component => {
  ReactDOM.render(
    <Root
      Component={ Component }
      store={  configureStore() }
      />,
    document.getElementById('root')
  )
}

render(Main)
hotReload(render)
