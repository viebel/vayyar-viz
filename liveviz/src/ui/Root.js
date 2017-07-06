import React from 'react'
import { Provider } from 'react-redux'
import { v4 } from 'node-uuid'
import { AppContainer } from 'react-hot-loader';
import Routes from '../ui/Routes'

import {BrowserRouter} from 'react-router-dom';


export const Root = ({Component, store}) =>
    <BrowserRouter>
        <AppContainer>
            <Provider store={ store }>

                <Component key={
                    //TODO Yehonathan 2017, May 19: get rid of the key - without it hot reload doesn't work
                    v4()
                }/>

            </Provider>
        </AppContainer>
    </BrowserRouter>

export const hotReload = (render) => {
    if (module.hot) {
        module.hot.accept('../ui/Routes', () => {
            const NextApp = require('../ui/Routes').default
            render(NextApp)
        })
    }
}

export const Main = Routes





