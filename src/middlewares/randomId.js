export default  (store) => (next) => (action) => {
    const { withRandomId, ...rest } = action
    if (!withRandomId) return next(action)

    const randomId = parseInt((Date.now() + Math.random()).toString())
    next({...rest, randomId})
}
