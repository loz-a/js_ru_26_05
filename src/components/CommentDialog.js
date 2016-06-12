import React, { Component, PropTypes } from 'react'
import { addComment } from '../AC/comment'
import { notifyArticleAboutNewComment } from '../AC/article'

class CommentDialog extends Component {

    static propTypes = {
        articleId: PropTypes.string.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        openFlag: PropTypes.bool
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        const { articleId } = this.props

        addComment(this._name.value, this._text.value, articleId)
        notifyArticleAboutNewComment(articleId)
    }

    resetForm = () => {
        this._name.value = ''
        this._text.value = ''
    }

    componentDidUpdate(prevProps) {
        const {
            toggleOpen,
            openFlag = false
        } = prevProps

        const isFormNotEmpty = this._name.value.length || this._name.value.length

         if (isFormNotEmpty && openFlag) toggleOpen() // tried to add comment and comment list was open
         this.resetForm()
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
