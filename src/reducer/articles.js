import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START } from '../constants'
import { normalizedArticles } from '../fixtures'
import { fromArray } from '../store/utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loading: false,
    isLoaded: false,
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
                .set('loaded', true)
                .set('entities', fromJS(fromArray(response)))
                // .update('entities', (entities) => entities.merge(fromArray(response)))


        // case DELETE_ARTICLE:
        //     return articles.filter(
        //         (article) => article.id !== payload.id
        //     )

        // case ADD_COMMENT:
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
        default:
    }
    return state
}
