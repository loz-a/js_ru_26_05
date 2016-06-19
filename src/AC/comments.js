import { ADD_COMMENT } from '../constants'
import { newIntId } from '../store/utils'

export function addComment(name, text, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            //это плохая практика - завязывать екшины на состояние стора
            id: newIntId('comments'),
            name,
            text,
            articleId
        }
    }
}
