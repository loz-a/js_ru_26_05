export default {
    getInitialState() {
        return {
            openedArticleId: null
        }
    },

    setOpenArticleId = (id) => () => {
        this.setState({
            openedArticleId: id
        })
    }
}
