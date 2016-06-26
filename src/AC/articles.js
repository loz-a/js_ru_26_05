import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_BY_ID,
    SUCCESS,
    START,
    FAIL
} from '../constants'

import $ from 'jquery'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function loadArticleById(id) {
    return {
        types: [
            LOAD_ARTICLE_BY_ID + START,
            LOAD_ARTICLE_BY_ID + SUCCESS,
            LOAD_ARTICLE_BY_ID + FAIL
        ],
        payload: { id },
        shouldCallApi: (state) => !state.articles.has(id),
        callAPI: () => $.get(`/api/article/${id}`)
    }
}

export function loadAllArticles() {
    return {
        types: [
            LOAD_ALL_ARTICLES + START,
            LOAD_ALL_ARTICLES + SUCCESS,
            LOAD_ALL_ARTICLES + FAIL
        ],
        callAPI: () => $.get('/api/article')
    }
}
