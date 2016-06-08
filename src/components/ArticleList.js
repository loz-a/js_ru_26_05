import React, { PropTypes, Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import OneOpenPage from '../decorators/OneOpenPage'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openedArticleId: PropTypes.string,
        setOpenArticleId: PropTypes.func.isRequired
    }

    render() {
        const {
            articles,
            openedArticleId = null,
            setOpenArticleId
         } = this.props

        if (!articles) return null

        const articleItems = articles.map((article) => {
            return (<li key={article.id}>
                <Article article = {article}
                    visibilityFlag = {openedArticleId === article.id}
                    notifyOpenArticleId = {setOpenArticleId(article.id)}
                />
            </li>)
        })

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart/>
            </div>
        )
    }
}

export default OneOpenPage(ArticleList)
