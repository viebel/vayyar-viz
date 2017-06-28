import React from 'react'
import '../styles/index.css'
import Home from '../app/home/ui/HomeUI'
import App from '../app/App'


import {Switch, Route} from 'react-router-dom';


const Routes = () => {
    return (
        <Route path="/">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/app' component={App}/>
          </Switch>
        </Route>)
};

export default Routes
