import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import ArticleList from './ArticleList'

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
            <Provider store = {this.props.store}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        username: <input value={this.state.user} onChange={this.handleChange} />
                    </form>
                    <Counter />
                    <ArticleList />
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

AppContainer.propTypes = {
    store: PropTypes.object
}

AppContainer.childContextTypes = {
    user: PropTypes.string.isRequired
}

export default AppContainer
