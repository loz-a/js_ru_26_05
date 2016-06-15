import BaseStore from './BaseStore'
import {
    ADD_COMMENT,
    DELETE_ARTICLE
} from '../constants'

export default class ArticleStore extends BaseStore {
    constructor(...args) {
        super(...args)

        this._subscribe((action) => {
            const { type, payload } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break;
                case ADD_COMMENT:
                    this._waitFor(['comments'])
                    this._addComment(payload)
                default:
                    return
            }

            this._emitChange()
        })
    }

    _addComment(comment) {
        const article = this.getById(comment.articleId)
        if (article) {
            article.comments.push(comment.id)
        }
    }
}
