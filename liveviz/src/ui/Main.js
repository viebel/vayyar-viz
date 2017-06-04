import React from 'react'
import '../styles/index.css'
import App from '../app/App'
import Connection from '../logic/Connection'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

// here is the doc of react-routere-redux: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const history = createHistory()

const Main = () =>
<ConnectedRouter history={history}>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/connect" component={Connection} />
  </div>
</ConnectedRouter>


export default Main
