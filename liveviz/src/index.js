import React from 'react'
import {render} from 'react-dom'
import configureStore from './common/configureStore'
import {Root, hotReload, Main} from './ui/Root'

const renderComponent = Component => {
    render(
            <Root
                Component={ Component }
                store={  configureStore() }/>
        ,
        document.getElementById('root')
    );
}

renderComponent(Main)
hotReload(renderComponent)


