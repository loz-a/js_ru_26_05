import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import ArticleList from './ArticleList'

class AppContainer extends React.Component {

    static propTypes = {
        store: PropTypes.object
    }

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <Counter />
                    <ArticleList />
                </div>
            </Provider>
        )
    }
}

export default AppContainer
