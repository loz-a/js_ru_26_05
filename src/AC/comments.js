import { ADD_COMMENT } from '../constants'

export function addComment(name, text, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            name,
            text,
            articleId
        },
        withRandomId: true
    }
}
