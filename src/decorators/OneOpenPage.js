import React, { Component } from 'react'

export default (CustomComponent) => class DecoratedComponent extends Component {

    state = {
        openedArticleId: null
    }

    setOpenArticleId = (id) => () => {
        this.setState({
            openedArticleId: id
        })
    }

    render() {        
        return <CustomComponent {...this.props}
        openedArticleId = {this.state.openedArticleId}
        setOpenArticleId = {this.setOpenArticleId}/>
    }
}
