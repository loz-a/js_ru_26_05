import $ from 'jquery'
import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncACFactory(apiCall, type) {
    return (payload) => {
        AppDispatcher.dispatch({
            type: type + START,
            payload
        })

        setTimeout(function () {
            apiCall(payload)
                .done((response) => AppDispatcher.dispatch({
                    type: type + SUCCESS,
                    response,
                    payload
                }))
                .fail((error) => AppDispatcher.dispatch({
                    type: type + FAIL,
                    error,
                    payload
                }))
        }, 1000);

    }
}

export function loadAllArticlesCall() {
    return $.get('/api/article')
}
export function loadArticleByIdCall({ id }) {
    return $.get(`/api/article/${id}`)
}

export function loadCommentsByArticleIdCall({ id }) {
    return $.get(`/api/comment?article=${id}`)
}
