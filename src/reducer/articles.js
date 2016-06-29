import {
    DELETE_ARTICLE,
    ADD_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_BY_ID,
    SUCCESS,
    START
} from '../constants'

import { fromArray } from '../store/utils'
import { fromJS, List } from 'immutable'

const defaultState = fromJS({
    loading: false,
    loadingText: false,
    entities: {}
})

export default (state = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case LOAD_ALL_ARTICLES + START:
            return state.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return state
                .set('loading', false)
                .set('entities', fromJS(fromArray(response)))
                // .update('entities', (entities) => entities.merge(fromArray(response)))

        case  LOAD_ARTICLE_BY_ID + START:
            return state.set('loadingText', true)

        case LOAD_ARTICLE_BY_ID + SUCCESS:
            return state
                .set('loadingText', false)
                .updateIn(['entities', payload.id], () => fromJS(response))


        case DELETE_ARTICLE:
            return state.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            //return state.setIn(['entities', 'comments'], fromJS(response))
            // return articles.map(
            //     (article) => {
            //         if (article.id === payload.articleId) {
            //             return {
            //                 ...article,
            //                 comments: [...article.comments, randomId]
            //             }
            //         }
            //         return article
            //     }
            // )
            return state
                .updateIn(
                    ['entities', payload.articleId, 'comments'],
                    new List([]),
                    (comments) => comments.push(randomId)
                )

        default:
    }
    return state
}
