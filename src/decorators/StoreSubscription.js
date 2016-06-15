import React from 'react'
import stores from '../stores'

export default (storeNames, getStateFromStores) => {
    storeNames = storeNames || Object.keys(stores)

    return (CustomComponent) => class DecoratedComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = getStateFromStores(stores, props)
        }

        componentWillReceiveProps(nextProps) {
            this.setState(getStateFromStores(stores, nextProps))
        }

        componentDidMount() {
            storeNames
                .forEach((name) => stores[name].addChangeListener(this.handleStoresChange))
        }

        componentWillUnmount() {
            storeNames
                .forEach((name) => stores[name].removeChangeListener(this.handleStoresChange))
        }

        handleStoresChange = () => {
            this.setState(getStateFromStores(stores, this.props))
        }

        render() {
            return <CustomComponent {...this.props} {...this.state} />
        }
    }
}
