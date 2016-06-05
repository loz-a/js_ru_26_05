export default {
    getInitialState() {
        const { visibilityFlag = false } = this.props
        return {
            visibilityFlag
        }
    },

    componentWillReceiveProps(nextProps) {
        const { visibilityFlag } = nextProps
        this.setState({ visibilityFlag })
    }

    toggleVisibility(evt) {
        if (evt && evt.preventDefault()) ev.preventDefault()
        this.setState({
            isOpen: !this.state.visibilityFlag
        })
    }
}
