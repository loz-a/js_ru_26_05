import React, { PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'
import { toArray } from '../store/utils'
import { loadAllArticles } from '../AC/articles'

// function ArticleListContainer({articles}) {
//     return (
//         <ArticleList articles = {articles} />
//     )
// }

// const ArticleListContainer = ({articles}) => (<ArticleList articles = {articles} />)

class ArticleListContainer extends React.Component {

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const { articles, loading } = this.props

        if (loading) return <h3>Loading...</h3>

        return (
            <div>
                <ArticleList articles = {articles} />
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        articles: toArray(state.articles.get('entities').toJS()),
        loading: state.articles.get('loading')
    }),
    { loadAllArticles },
    null,
    {pure: false}
)(ArticleListContainer)
