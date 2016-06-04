import React, { Component } from 'react'
//decorator === HOC(Higher Order Component)
export default (CustomComponent) => class DecoratedComponent extends Component {

    constructor(props) {
        super()

        this.state = {
            isHide: true
        };
    }

    toggleVisibility = (evt) => {
        if (evt && evt.preventDefault) evt.preventDefault()
        this.setState({
            isHide: !this.state.isHide
        })
    }

    render() {
        return <CustomComponent {...this.props} isHide = {this.state.isHide} toggleVisibility = {this.toggleVisibility}/>
    }
}
