import React from 'react'
import '../styles/index.css'
import App from '../logic/App'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

const history = createHistory()

const Main = () =>
<ConnectedRouter history={history}>
  <Route exact path="/" component={App} />
</ConnectedRouter>


export default Main
