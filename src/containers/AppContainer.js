import React, { PropTypes } from 'react'

class AppContainer extends React.Component {

    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    }

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href = "#" onClick = {this.handleClick}>Increment me</a>
            </div>
        )
    }

    handleClick = (evt) => {
        evt.preventDefault()
        this.props.increment()
    }
}

export default AppContainer
