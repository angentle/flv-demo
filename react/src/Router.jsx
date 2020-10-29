import React, { Component } from 'react'
import {
    BrowserRouter,
    //   HashRouter,
    Route
} from 'react-router-dom'
import routerConfig from './routers/index'

class Router extends Component {

    render () {
        return (
            <BrowserRouter>
                <div>
                    {routerConfig.map((route, idx) => (
                        <Route {...route} key={`route-${idx}`} />
                    ))}
                </div>
            </BrowserRouter>
        )
    }
}

export default Router
