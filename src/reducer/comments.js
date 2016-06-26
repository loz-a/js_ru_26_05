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
    const { type, payload, response, error } = action

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

        // case ADD_COMMENT:
        //     return [
        //         ...comments,
        //         {
        //             id: randomId,
        //             name: payload.name,
        //             text: payload.text
        //         }
        //     ]
        default:
    }
    return state
}
