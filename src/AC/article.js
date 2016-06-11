import AppDispatcher from '../dispatcher'
import {
    DELETE_ARTICLE,
    NOTIFY_ARTICLE_ABOUT_NEW_COMMENT
} from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export function notifyArticleAboutNewComment(articleId) {
    const action = {
        type: NOTIFY_ARTICLE_ABOUT_NEW_COMMENT,
        payload: { id: articleId }
    }
    AppDispatcher.dispatch(action)
}
