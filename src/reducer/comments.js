import {
    ADD_COMMENT,
    LOAD_All_COMMENTS,
    START,
    SUCCESS
} from '../constants'

import { fromArray } from '../store/utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loading: false,
    loaded: false,
    entities: {}
})

export default (state = defaultState, action) => {
    const { type, payload, response, error, randomId } = action

    switch (type) {
        case LOAD_All_COMMENTS + START:
            return state
                .set('loading', true)
                .set('loaded', false)

        case LOAD_All_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
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
