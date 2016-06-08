import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import OneOpenPage from '../decorators/OneOpenPage'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticleList extends Component {

    state = {
        selected: null
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        openedArticleId: PropTypes.string,
        setOpenArticleId: PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log(findDOMNode(this.refs.chart));
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

        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                <Select
                    options  = {options}
                    onChange = {this.handleChange}
                    value    = {this.state.selected}
                    multi    = {true}
                />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default OneOpenPage(ArticleList)
