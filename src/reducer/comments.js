import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { fromArray } from '../store/utils'
import { fromJS } from 'immutable'

export default (comments = fromJS(fromArray(normalizedComments)), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
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
    return comments
}
