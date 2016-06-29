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

export function addComment(user, text, articleId) {
    // return {
    //     types: [
    //         ADD_COMMENT + START,
    //         ADD_COMMENT + SUCCESS,
    //         ADD_COMMENT + FAIL,
    //     ],
    //     // callAPI: () => $.post('/api/comment', JSON.stringify({user, text}))
    //     callAPI: () => $.ajax({
    //           url: 'http://localhost:8080/api/comment',
    //           type: "POST",
    //           data: {user, text, article: articleId},
    //           dataType: 'json',
    //           headers: {
    //               "Access-Control-Allow-Origin": "*"
    //           }
    //         })
    // }

    return {
        type: ADD_COMMENT,
        payload: {user, text, articleId},
        withRandomId: true
    }
}
