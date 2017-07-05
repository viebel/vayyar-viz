import React from 'react'
import {render} from 'react-dom'
import configureStore from './common/configureStore'
import Root from './ui/Root'

import { createStore, compose, applyMiddleware } from 'redux'
import app  from './reducers/index'
import { loadState, saveState } from './common/localStorage'

import { AppContainer } from 'react-hot-loader';

var store = createStore(app, loadState())

render(
    <AppContainer>
        <Root store={  configureStore() } />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    var ttt = require.resolve('./reducers/index.js')
    module.hot.accept(ttt, () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

