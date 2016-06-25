import React, { PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'
import { toArray } from '../store/utils'

// function ArticleListContainer({articles}) {
//     return (
//         <ArticleList articles = {articles} />
//     )
// }

const ArticleListContainer = ({articles}) => (<ArticleList articles = {articles} />)

export default connect(
    (state) => ({articles: toArray(state.articles.toJS())})
)(ArticleListContainer)
