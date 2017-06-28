import React from 'react'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'


const Root = ({Component, store}) =>
    <Provider store={ store }>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>

export default Root;



