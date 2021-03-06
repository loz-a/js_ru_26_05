import { createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import callAPI from '../middlewares/callApi'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()

const enhancer = compose(
    // applyMiddleware(thunk, callAPI, randomId, logger),
    applyMiddleware(thunk, callAPI, randomId),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)
const store = createStore(reducer, {}, enhancer)

window.store = store

export default store
