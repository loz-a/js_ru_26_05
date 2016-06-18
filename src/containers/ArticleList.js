import React, { PropTypes } from 'react'
import ArticleList from '../components/ArticleList'
import { connect } from 'react-redux'

class ArticleListContainer extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <ArticleList articles = {this.props.articles} />
        )
    }
}

export default connect(
    (state) => ({articles: state.articles})
)(ArticleListContainer)
