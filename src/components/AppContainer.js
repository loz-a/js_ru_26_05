import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import StoreSubscription from '../decorators/StoreSubscription'

function AppContainer(props) {
    const articles = props.stores.articles
    return <ArticleList articles = {articles} />
}

AppContainer.propTypes = {
    stores: PropTypes.shape({
        articles: PropTypes.array.isRequired
    }).isRequired
}

export default StoreSubscription(AppContainer)
