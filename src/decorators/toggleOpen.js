import React, { Component } from 'react'
//decorator === HOC(Higher Order Component)
export default (CustomComponent) => class DecoratedComponent extends Component {

    state = {
        isOpen: false
    }

    toggleOpen = (evt) => {
        if (evt && evt.preventDefault) evt.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return <CustomComponent {...this.props}
            isOpen = {this.state.isOpen}
            toggleOpen = {this.toggleOpen} />
    }
}
