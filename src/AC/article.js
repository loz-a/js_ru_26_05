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
