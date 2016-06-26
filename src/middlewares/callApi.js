export default (store) => (next) => (action) => {
    const {
        
        callAPI, ...rest } = action


    if (!callAPI) return next(action)



    next({...rest})
}
