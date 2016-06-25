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
        return (
            <ArticleList articles = {this.props.articles} />
        )
    }
}

export default connect(
    (state) => ({articles: toArray(state.articles.toJS())}),
    { loadAllArticles }
)(ArticleListContainer)
