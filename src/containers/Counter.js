import React, { PropTypes } from 'react'
import { increment } from '../AC/counter'
import { connect } from 'react-redux'

class Counter extends React.Component {

    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    }

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href = "#" onClick = {this.handleClick}>increment me</a>
            </div>
        )
    }

    handleClick = (evt) => {
        evt.preventDefault()
        this.props.increment()
    }
}

export default connect(
    (state) => ({count: state.count}),
    { increment }
)(Counter)
