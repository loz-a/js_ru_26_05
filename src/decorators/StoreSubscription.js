import React, { Component } from 'react'
import stores from '../stores'

export default (CustomComponent) => class DecoratedComponent extends Component {

    state = {
        stores: null
    }

    constructor(props) {
        super(props)
        this.state.stores = this.pupulateStores()
    }

    componentDidMount() {
        stores.articles.addChangeListener(this.updateStoresState)
        stores.comments.addChangeListener(this.updateStoresState)
    }

    componentWillUnmount() {
        stores.articles.removeChangeListener(this.updateStoresState)
        stores.comments.removeChangeListener(this.updateStoresState)
    }

    updateStoresState = () => {
        this.setState({
            stores: this.pupulateStores()
        })
    }

    pupulateStores() {
        const populatedStores = {}
        //не всегда нужно подписываться на все сторы и не всегда нужно именно .getAll()
        Object.keys(stores).forEach((key) => {
            populatedStores[key] = stores[key].getAll()
        })
        return populatedStores
    }

    render() {
        return <CustomComponent {...this.props} stores = {this.state.stores} />
    }

}
