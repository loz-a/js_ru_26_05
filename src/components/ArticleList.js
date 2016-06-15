import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import OneOpen from '../decorators/OneOpen'
import Select from 'react-select'
import DateRange from '../decorators/DateRange'

import 'react-select/dist/react-select.css'

class ArticleList extends Component {

    state = {
        selected: []
    }

    componentDidMount() {
        console.log(findDOMNode(this.refs.chart));
    }

    render() {
        const articleItems = this.getArticleItems()
        const select = this.getSelect()
        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
                <Chart ref="chart" />
                {select}
            </div>
        )
    }

    getArticleItems = () => {
        const {
            articles,
            isOpen,
            openItem
         } = this.props

        if (!articles) return null

        return articles.map((article) =>
            <li key={article.id}>
                <Article article = {article}
                    isOpen = {isOpen(article.id)}
                    openArticle = {openItem(article.id)}
                />
            </li>
        )
    }

    getSelect() {
        const { articles } = this.props
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options  = {options}
            onChange = {this.handleChange}
            value    = {this.state.selected}
            multi    = {true}
        />
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

ArticleList.propTypes = {
    articles:  PropTypes.array.isRequired,
    openItem:  PropTypes.func.isRequired,
    isOpen:    PropTypes.func.isRequired
}

export default DateRange(OneOpen(ArticleList))
