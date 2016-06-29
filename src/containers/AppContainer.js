import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

class AppContainer extends React.Component {

    state = {
        user: ''
    }

    getChildContext() {
        console.info('call getChildContext')
        return {
            user: this.state.user
        }
    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        username: <input value={this.state.user} onChange={this.handleChange} />
                    </form>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleChange = (evt) => {
        this.setState({
            user: evt.target.value
        })
    }

    handleSubmit = (evt) => { evt.preventDefault() }
}

AppContainer.childContextTypes = {
    user: PropTypes.string.isRequired
}

export default AppContainer
