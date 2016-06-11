import BaseStore from './BaseStore'
import { ADD_COMMENT } from '../constants'

export default class CommentStore extends BaseStore {
    constructor(...args) {
        super(...args)

        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload)
                    break;
                default:
                    return
            }

            this._emitChange()
        })
    }

    _add(item) {
        let newItem = Object.assign({}, item)
        if (newItem.id === undefined) newItem.id = this._getNewItemId()
        super._add(newItem);
    }

    _getNewItemId() {
        const keys = Object.keys(this._items)
        if (!keys.length) return 0
        return Math.max(...keys) + 1
    }
}
