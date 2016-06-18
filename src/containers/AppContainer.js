import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'

class AppContainer extends React.Component {

    static propTypes = {
        store: PropTypes.object
    }

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <Counter />
                </div>
            </Provider>
        )
    }
}

export default AppContainer
