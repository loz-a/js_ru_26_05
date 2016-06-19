import { ADD_COMMENT } from '../constants'
import { newIntId } from '../store/utils'

export function addComment(name, text, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            id: newIntId('comments'),
            name,
            text,
            articleId
        }
    }
}
