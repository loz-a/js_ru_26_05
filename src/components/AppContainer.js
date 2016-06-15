import React from 'react'
import ArticleList from './ArticleList'
import StoreSubscription from '../decorators/StoreSubscription'
import { loadAllArticles } from '../AC/article'


class AppContainer extends React.Component {

    componentDidMount() {
        loadAllArticles()
    }

    render() {
        const { loading, articles } = this.props
        if (loading) return <h1>Loading...</h1>
        return <ArticleList articles = {articles} />
    }
}

function getState(stores) {
    const { articles } = stores
    return {
        articles: articles.getAll(),
        loading: articles.loading
    }
}

export default StoreSubscription(null, getState)(AppContainer)
