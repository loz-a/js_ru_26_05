import React, { Component } from 'react'
//decorator === HOC(Higher Order Component)
export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super(props)
        const { openFlag = false } = props
        this.state = { openFlag }
    }

    componentWillReceiveProps(nextProps) {
        const { openFlag } = nextProps
        this.setState({ openFlag })
    }

    toggleOpen = (evt) => {
        if (evt && evt.preventDefault) evt.preventDefault()
        this.setState({
            openFlag: !this.state.openFlag
        })
    }

    render() {
        return <CustomComponent {...this.props}
            openFlag = {this.state.openFlag}
            toggleOpen = {this.toggleOpen} />
    }
}
