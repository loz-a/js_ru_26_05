import BaseStore from './BaseStore'
import {
    ADD_COMMENT,
    LOAD_COMMENTS_BY_ARTICLE_ID,
    SUCCESS
} from '../constants'

export default class CommentStore extends BaseStore {
    constructor(...args) {
        super(...args)

        this._subscribe((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    const item = this._add(payload)
                    payload.id = item.id
                    break;
                case LOAD_COMMENTS_BY_ARTICLE_ID + SUCCESS:
                    response.forEach(this._add)
                    break
                default:
                    return
            }

            this._emitChange()
        })
    }

    _add(item) {
        let newItem = Object.assign({}, item)
        if (newItem.id === undefined) newItem.id = this._getNewItemId()
        return super._add(newItem);
    }

    _getNewItemId() {
        const keys = Object.keys(this._items)
        if (!keys.length) return 0
        return Math.max(...keys) + 1
    }
}
