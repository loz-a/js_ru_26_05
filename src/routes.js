import {
    Router,
    Route,
    browserHistory,
    hashHistory
} from 'react-router'

import React from 'react'
import AppContainer from './containers/AppContainer'
import Counter from './containers/Counter'
import ArticleList from './containers/ArticleList'

export default (
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
            <Route path="counter" component={Counter} />
            <Route path="articles" component={ArticleList} />
        </Route>
    </Router>
)
