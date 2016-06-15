import React from 'react'

export default (CustomComponent) =>
    class DecoratedComponent extends React.Component {
        state = {
            openedItem: null
        }

        openItem = (id) => () => {
            this.setState({
                openedItem: this.state.openedItem === id ? null : id
            })
        }

        isOpen = (id) => this.state.openedItem === id

        render() {
            return <CustomComponent {...this.props}
            openItem = {this.openItem}
            isOpen = {this.isOpen}/>
        }
    }
