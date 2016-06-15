import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import StoreSubscription from '../decorators/StoreSubscription'

function AppContainer(props) {
    return <ArticleList articles = {props.articles} />
}

function getState(stores) {
    const { articles } = stores
    return {
        articles: articles.getAll()
    }
}

export default StoreSubscription(null, getState)(AppContainer)
