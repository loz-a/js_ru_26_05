export default ({dispatch, getState}) => (next) => (action) => {
    const {
        types,
        callAPI,
        shouldCallApi = () => true,
        payload = {},
        ...rest
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

    next({...rest, payload, callAPI, type: typeStart})

    setTimeout(() => {
        callAPI().then(
            (response) => next({...rest, payload, callAPI, response, type: typeSuccess}),
            (error) => next({...rest, payload, callAPI, error, type: typeFailure}))
    }, 1000)
}
