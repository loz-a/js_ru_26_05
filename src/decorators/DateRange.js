import React, { PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'

import 'react-day-picker/lib/style.css'

export default (CustomComponent) => class DecoratedComponent extends React.Component {

    state = {
        from: null,
        to: null
    }

    static propTypes = {
        articles:  PropTypes.array.isRequired
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    handleResetClick = (e) => {
        e.preventDefault()
        this.setState({
            from: null,
            to: null
        })
    }

    filterArticles = (articles) => {
        const from = this.state.from || new Date(0)
        const to   = this.state.to || new Date()
        return articles.filter((article) => DateUtils.isDayInRange(new Date(article.date), {from, to}))
    }

    render() {
        const { from, to } = this.state
        const articles = this.filterArticles(this.props.articles)

        return (
            <div>
                {from && to &&
                  <p>
                    <a href="#" onClick={this.handleResetClick}>Reset</a>
                  </p>
                }

                <DayPicker
                    ref="daypicker"
                    numberOfMonths = {2}
                    selectedDays = {(day) => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick = {this.handleDayClick}
                />

                <CustomComponent {...this.props}
                    articles = {articles}
                />
            </div>
        )
    }
}
