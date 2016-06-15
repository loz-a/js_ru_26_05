import BaseStore from './BaseStore'
import {
    ADD_COMMENT,
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES_START,
    LOAD_ALL_ARTICLES_START,
    LOAD_ALL_ARTICLES_SUCCESS
} from '../constants'

export default class ArticleStore extends BaseStore {
    constructor(...args) {
        super(...args)

        this._subscribe((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(payload.id)
                    break;
                case ADD_COMMENT:
                    this._waitFor(['comments'])
                    this._addComment(payload)
                    break
                case LOAD_ALL_ARTICLES_START:
                    this.loading = true
                    break
                case LOAD_ALL_ARTICLES_SUCCESS:
                    response.forEach(this._add)
                    this.loading = false
                    break
                case LOAD_ALL_ARTICLES_FAIL:
                    this.error = error
                    this.loading = false
                    break
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
