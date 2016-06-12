import BaseStore from './BaseStore'
import {
    NOTIFY_ARTICLE_ABOUT_NEW_COMMENT,
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
                //Незачем разбивать на 2 экшина, стоит использовать ADD_COMMENT
                case NOTIFY_ARTICLE_ABOUT_NEW_COMMENT:
                    this._addCommentByArticleId(payload.id)
                default:
                    return
            }

            this._emitChange()
        })
    }

    _addCommentByArticleId(articleId) {
        const article = this.getById(articleId)
        if (article) {
            //можно, но опасно. Если поменяется логика генерации id - будете ловить баги
            const comments = this.getStoreByName('comments').getAll()
            article.comments.push(Math.max(...Object.keys(comments)))
        }
    }
}
