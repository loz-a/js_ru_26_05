export default class ArticleStore {
    constructor(initialState = []) {
        this._items = {}
        initialState.forEach(this._add)
    }

    getAll = () => {
        return Object.keys(this._items).map(this.getById)
    }

    getById = (id) => {
        return this._items[id]
    }

    _add = (item) => {
        this._items[item.id] = item
    }

    _delete = (id) => {
        delete this._items[id]
    }

}
