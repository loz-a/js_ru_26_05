import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import Article from './Article'
import Chart from './Chart'
import OneOpen from '../decorators/OneOpen'
import Select from 'react-select'
import DateRange from '../decorators/DateRange'
import moment from 'moment'
import 'moment-range'

import 'react-select/dist/react-select.css'

class ArticleList extends Component {

    state = {
        selected: null
    }

    static propTypes = {
        articles:  PropTypes.array.isRequired,
        openedId:  PropTypes.string,
        setOpenId: PropTypes.func.isRequired,
        dateRange: PropTypes.shape({
            from: PropTypes.any,
            to:   PropTypes.any
        })
    }

    componentDidMount() {
        console.log(findDOMNode(this.refs.chart));
    }

    render() {
        const {
            articles,
            openedId = null,
            setOpenId,
            dateRange = null
         } = this.props

        if (!articles) return null

        const range = this.getDateRange(dateRange)

        const articleItems = articles.map((article) => {
            const isDisplay = range.contains(moment(article.createAt, 'MM-DD-YYYY'), true)

            return isDisplay ? (<li key={article.id}>
                <Article article = {article}
                    openFlag = {openedId === article.id}
                    notifyOpenId = {setOpenId(article.id)}
                />
            </li>) : null
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

    getDateRange(dateRangeProps) {
        const from = dateRangeProps.from || new Date(0)
        const to   = dateRangeProps.to || new Date()
        return moment.range(from, to)
    }
}

export default DateRange(OneOpen(ArticleList))
