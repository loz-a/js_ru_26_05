import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {

    state = {
        openedId: null
    }

    setOpenId = (id) => () => {
        this.setState({
            openedId: id
        })
    }

    render() {
        return <CustomComponent {...this.props}
        openedId = {this.state.openedId}
        setOpenId = {this.setOpenId}/>
    }
}
