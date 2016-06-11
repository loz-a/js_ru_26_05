import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(name, text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: { name, text, articleId }
    })
}
