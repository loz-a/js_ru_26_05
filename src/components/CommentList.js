import React, { PropTypes, Component } from 'react'
import ToggleOpen from '../decorators/ToggleOpen'
import Comment from './Comment'
import CommentDialog from './CommentDialog'

class CommentList extends Component {

    componentWillReceiveProps({ isOpen, loading, loaded, loadAllComments }) {
        if (isOpen && !loading && !loaded) loadAllComments()
    }

    render() {
        const {
            article,
            isOpen,
            toggleOpen
        } = this.props

        const commentsCount = article.comments.length

        if (!commentsCount) return null

        const togglerLink = this.getTogglerLink(commentsCount)
        const comments = this.getList(article)


        return (
            <section>
                <h4>
                    {togglerLink}
                 </h4>
                {comments}
                <CommentDialog articleId = {article.id} />
            </section>
        )
    }

    getTogglerLink(commentsCount) {
        const { isOpen, toggleOpen } = this.props
        const visibilityText = isOpen ? 'Hide' : 'Show'
        return <a href="#" onClick={toggleOpen}>{visibilityText} {commentsCount} comments</a>
    }

    getList(article) {
        const { isOpen, comments, loading } = this.props
        if (!isOpen) return null

        if (loading) return <h3>Loading comments...</h3>

        if (!comments) return null

        const items = comments.map(
            (comment) => (<Comment key={comment.id} comment={comment} />)
        )
        return <div>{items}</div>
    }
}

CommentList.propTypes = {
    article: PropTypes.object.isRequired,
    loadAllComments: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    )
}

export default ToggleOpen(CommentList)
