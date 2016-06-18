import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, 10)

window.store = store

export default store
