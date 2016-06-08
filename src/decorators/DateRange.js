import React from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

export default (CustomComponent) => class DecoratedComponent extends React.Component {

    state = {
        from: null,
        to: null
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

    render() {
        const { from, to } = this.state
        //вот это не очень хорошая практика выносить верстку в декоратор, Если вы так делаете - надо быть уверенным что именно эту верстку вы потом сможете использовать где угодно
        return (
            <div>

                {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
                {from && !to && <p>Please select the <strong>last day</strong>.</p>}
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
                    dateRange = {this.state}
                />
            </div>
        )
    }
}
