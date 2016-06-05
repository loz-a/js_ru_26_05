import React, { Component } from 'react'
//decorator === HOC(Higher Order Component)
export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super(props)
        const { visibilityFlag = false } = props
        this.state = { visibilityFlag }
    }

    componentWillReceiveProps(nextProps) {
        const { visibilityFlag } = nextProps
        this.setState({ visibilityFlag })
    }

    toggleVisibility = (evt) => {
        if (evt && evt.preventDefault) evt.preventDefault()
        this.setState({
            visibilityFlag: !this.state.visibilityFlag
        })
    }

    render() {        
        return <CustomComponent {...this.props}
            visibilityFlag = {this.state.visibilityFlag}
            toggleVisibility = {this.toggleVisibility} />
    }
}
