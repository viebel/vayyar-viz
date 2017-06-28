import React from 'react'
import {render} from 'react-dom'
import configureStore from './common/configureStore'
import Root from './ui/Root'

import { AppContainer } from 'react-hot-loader';

render(
    <AppContainer>
        <Root store={  configureStore() } />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept()
}

