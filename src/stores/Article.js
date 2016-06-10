import BaseStore from './BaseStore'
import { DELETE_ARTICLE } from '../constants'

export default class ArticleStore extends BaseStore {
    constructor(initialState = []) {
        super(initialState)

        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break;
                default:
                    return
            }

            this._emitChange()
        })

    }
}
