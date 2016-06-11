import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comment'
import { notifyArticleAboutNewComment } from '../AC/article'

class CommentDialog extends Component {

    static propTypes = {
        articleId: PropTypes.string.isRequired
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        addComment(
            this._name.value,
            this._text.value,
            this.props.articleId
        )

        notifyArticleAboutNewComment(this.props.articleId)

        this._name.value = this._text.value = ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <p>
                    <input
                        name = "name"
                        placeholder = "Author"
                        ref = {(ref) => this._name = ref} />
                </p>
                <p>
                    <textarea
                        name = "text"
                        placeholder = "Write comment here..."
                        ref = {(ref) => this._text = ref} />
                </p>
                <p>
                    <input type="submit" defaultValue="Ok" />
                </p>
            </form>
        )
    }
}

export default CommentDialog
