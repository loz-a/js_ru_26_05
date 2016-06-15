import React from 'react'
import ArticleList from './ArticleList'
import StoreSubscription from '../decorators/StoreSubscription'
import { loadAllArticles } from '../AC/article'


class AppContainer extends React.Component {

    componentDidMount() {
        loadAllArticles()
    }

    render() {
        return <ArticleList articles = {this.props.articles} />
    }
}

function getState(stores) {
    const { articles } = stores
    return {
        articles: articles.getAll()
    }
}

export default StoreSubscription(null, getState)(AppContainer)
