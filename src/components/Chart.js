import React, { Component, PropTypes } from 'react'

class Chart extends Component {
    static propTypes = {

    }

    componentDidMount() {
        console.log('---', this.refs.container);
        this.refs.container.innerHTML = 'Hello world'
    }

    componentWillReceiveProps(nextProps) {
        // change chart
    }

    render() {
        return (
            <div>
                <h3>Chart for articles</h3>
                <div ref="container"></div>
            </div>
        )
    }
}

export default Chart
