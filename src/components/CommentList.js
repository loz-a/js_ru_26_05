import React, { PropTypes, Component } from 'react'
import ToggleOpen from '../decorators/ToggleOpen'
import Comment from './Comment'
import CommentDialog from './CommentDialog'

class CommentList extends Component {

    render() {
        const {
            article,
            isOpen,
            toggleOpen
        } = this.props

        const commentsData = article.getRelation('comments')
        if (!commentsData) return null

        const togglerLink = this.getTogglerLink(commentsData)
        const comments = this.getList(commentsData)

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

    getTogglerLink(commentsData) {
        const { isOpen, toggleOpen } = this.props
        const visibilityText = isOpen ? 'Hide' : 'Show'
        return <a href="#" onClick={toggleOpen}>{visibilityText} {commentsData.length} comments</a>
    }

    getList(commentsData) {
        const { isOpen } = this.props
        if (!isOpen) return null

        const items = commentsData.map((comment) =>
            <Comment key={comment.id} comment={comment} />
        )
        return <div>{items}</div>
    }
}

CommentList.propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func.isRequired
}

export default ToggleOpen(CommentList)
