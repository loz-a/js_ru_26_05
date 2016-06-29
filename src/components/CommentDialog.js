import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class CommentDialog extends Component {

    state = {
        text: ''
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const { articleId, addComment } = this.props
        console.log('==CommentDialog handleSubmit context', this.context.user);

        
        addComment(
            this.context.user,
            this.state.text,
            articleId
        )

        this.setState({
            text: ''
        })
    }

    handleChange = (input) => (evt) => {
        this.setState({
            [input]: evt.target.value
        })
    }

    render() {
        console.log('==CommentDialog render context', this.context.user);
        return (
            <form onSubmit = {this.handleSubmit}>
                {/*<p>
                    <input
                        name = "user"
                        placeholder = "Author"
                        value = {this.state.user}
                        onChange = {this.handleChange('user')} />
                </p>*/}
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
    articleId: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
}

CommentDialog.contextTypes = {
    user: PropTypes.string
}

export default connect(
    null,
    { addComment }
)(CommentDialog)
