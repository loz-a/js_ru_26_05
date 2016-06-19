import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

export default (comments = normalizedComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:            
            return [
                ...comments
                ,{
                    id: payload.id,
                    name: payload.name,
                    text: payload.text
                }
            ]
        default:
    }
    return comments
}
