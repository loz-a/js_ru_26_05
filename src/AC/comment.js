import AppDispatcher from '../dispatcher'
import { loadCommentsByArticleIdCall, asyncACFactory } from './webUtils'
import { ADD_COMMENT, LOAD_COMMENTS_BY_ARTICLE_ID } from '../constants'

export function addComment(name, text, articleId) {

    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        payload: { name, text, articleId }
    })
}

export const loadCommentsByArticleId = asyncACFactory(
    loadCommentsByArticleIdCall,
    LOAD_COMMENTS_BY_ARTICLE_ID
)
