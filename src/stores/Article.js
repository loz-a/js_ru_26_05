import BaseStore from './BaseStore'
import {
    ADD_COMMENT,
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_BY_ID,
    START,
    FAIL,
    SUCCESS
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
                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break
                case LOAD_ALL_ARTICLES + SUCCESS:
                    response.forEach(this._add)
                    this.loading = false
                    break
                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = error
                    this.loading = false
                    break
                case LOAD_ARTICLE_BY_ID + START:
                    this.getById(payload.id).loading = true
                    break
                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this._add(response)
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
