import React, { PropTypes, Component } from 'react'
import Article from './Article'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired
    }

    state = {
        openedArticle: null
    }

    render() {
        const { articles } = this.props

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openedArticle}
                openArticle = {this.toggleOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    toggleOpen = id => ev => {
        this.setState({
            openedArticle: id
        })
    }

}

export default ArticleList
