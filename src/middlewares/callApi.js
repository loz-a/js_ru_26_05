export default ({dispatch, getState}) => (next) => (action) => {
    const {
        types,
        callAPI,
        shouldCallApi = () => true,
        payload = {}
    } = action

    if (!types) return next(action)

    if (!Array.isArray(types)
        || types.length !== 3
        || !types.every((type) => typeof type === 'string')
    ) {
        throw new Error('Expected of array of three string types')
    }

    if (typeof callAPI !== 'function') throw new Error('Expected fetch to be a function')

    if (!shouldCallApi(getState())) return

    const [typeStart, typeSuccess, typeFailure] = types

    dispatch({payload, type: typeStart})

    return callAPI().then(
        (response) => dispatch({payload, response, type: typeSuccess}),
        (error) => dispatch({payload, error, type: typeFailure})
    )

}
