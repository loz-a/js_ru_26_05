 import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import DataWrapper from './DataWrapper'
import { DELETE_ARTICLE } from '../constants'

const SOME_CHANGE_EVENT = 'SOME_CHANGE_EVENT'

export default class BaseStore extends EventEmitter {
    constructor(stores, initialState = []) {
        super()
        this._items = {}
        this._stores = stores
        initialState.forEach(this._add.bind(this))
    }

    _subscribe(callback) {
        this.dispatchToken = AppDispatcher.register(callback)
    }

    _waitFor(storeNames = []) {
        const tokens = storeNames.map((name) => this.getStoreByName(name).dispatchToken)
        AppDispatcher.waitFor(tokens)
    }

    getAll = () => {
        return Object.keys(this._items).map(this.getById)
    }

    getById = (id) => {
        return this._items[id]
    }

    getStoreByName = (name) => {
        return this._stores[name]
    }

    _add = (item) => {
        return this._items[item.id] = new DataWrapper(item, this)
    }

    _delete = (id) => {
        delete this._items[id]
    }

    _emitChange() {
        this.emit(SOME_CHANGE_EVENT)
    }

    addChangeListener = (callback) => {
        this.on(SOME_CHANGE_EVENT, callback)
    }

    removeChangeListener = (callback) => {
        this.removeListener(SOME_CHANGE_EVENT, callback)
    }
}
