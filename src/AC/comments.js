import {
    ADD_COMMENT,
    LOAD_All_COMMENTS,
    START,
    SUCCESS,
    FAIL
} from '../constants'

import $ from 'jquery'

export function loadAllComments() {
    return {
        types: [
            LOAD_All_COMMENTS + START,
            LOAD_All_COMMENTS + SUCCESS,
            LOAD_All_COMMENTS + FAIL,
        ],
        callAPI: () => $.get('/api/comment')
    }
}

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
