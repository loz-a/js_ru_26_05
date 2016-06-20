import React, { PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'

// function ArticleListContainer({articles}) {
//     return (
//         <ArticleList articles = {articles} />
//     )
// }

const ArticleListContainer = ({articles}) => (<ArticleList articles = {articles} />)

export default connect(
    (state) => ({articles: state.articles})
)(ArticleListContainer)
