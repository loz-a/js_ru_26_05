import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comment'

class CommentDialog extends Component {

    state = {
        name: '',
        text: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        const { articleId } = this.props
        const { name, text } = this.state

        addComment(name, text, articleId)

        this.setState({
            name: '',
            text: ''
        })
    }

    handleChange = (input) => (evt) => {
        this.setState({
            [input]: evt.target.value
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <p>
                    <input
                        name = "name"
                        placeholder = "Author"
                        value = {this.state.name}
                        onChange = {this.handleChange('name')} />
                </p>
                <p>
                    <textarea
                        name = "text"
                        placeholder = "Write comment here..."
                        value = {this.state.text}
                        onChange = {this.handleChange('text')} />
                </p>
                <p>
                    <input type="submit" defaultValue="Ok" />
                </p>
            </form>
        )
    }
}

CommentDialog.propTypes = {
    articleId: PropTypes.string.isRequired
}

export default CommentDialog
