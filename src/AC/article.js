import AppDispatcher from '../dispatcher'
import { loadAllArticlesCall, asyncACFactory } from './webUtils'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }
    AppDispatcher.dispatch(action)
}

export const loadAllArticles = asyncACFactory(loadAllArticlesCall, LOAD_ALL_ARTICLES)
