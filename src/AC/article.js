import AppDispatcher from '../dispatcher'
import { loadAllArticlesCall } from './webUtils'
import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES_START,
    LOAD_ALL_ARTICLES_SUCCESS,
    LOAD_ALL_ARTICLES_FAIL
} from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export function loadAllArticles() {
    AppDispatcher.dispatch({
        type: LOAD_ALL_ARTICLES_START
    })

    loadAllArticlesCall()
        .done((response) => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES_SUCCESS,
            response
        }))
        .fail((error) => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES_FAIL,
            error
        }))
}
