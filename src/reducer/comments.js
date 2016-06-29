import {
    ADD_COMMENT,
    LOAD_All_COMMENTS,
    LOAD_ITEMS_PER_PAGE,
    START,
    SUCCESS
} from '../constants'

import { fromArray } from '../store/utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loading: false,
    loaded: false,
    entities: {},
    total: undefined
})

export default (state = defaultState, action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case LOAD_All_COMMENTS + START:
        case LOAD_ITEMS_PER_PAGE + START:
            return state
                .set('loading', true)
                .set('loaded', false)

        case LOAD_All_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', fromJS(fromArray(response.records)))

        case LOAD_ITEMS_PER_PAGE + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('total', parseInt(response.total))
                .set('entities', fromJS(fromArray(response.records)))

        // case ADD_COMMENT + SUCCESS:
        //     return state.update(['entities'], (entities) => entities.merge(fromJs(fromArray(response))))

        case ADD_COMMENT:
            return state.setIn(
                ['entities', randomId.toString()],
                fromJS({...payload, id: randomId})
            )

        default:
    }
    return state
}
