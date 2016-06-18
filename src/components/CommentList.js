import React, { PropTypes, Component } from 'react'
import ToggleOpen from '../decorators/ToggleOpen'
import Comment from './Comment'
import CommentDialog from './CommentDialog'
// import { loadCommentsByArticleId } from '../AC/comment'
import { getRelation } from '../store/utils'

class CommentList extends Component {

    // componentWillReceiveProps({ isOpen, article }) {
    //     if (isOpen
    //         && !getRelation(article, 'comments').length
    //         && !article.loadingComments) {
    //         loadCommentsByArticleId(article)
    //     }
    // }

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
        const { isOpen } = this.props
        if (!isOpen) return null

        if (article.loadingComments) return <h3>Loading comments...</h3>

        const comments = getRelation(article, 'comments')
        const items = comments.map((comment) =>
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
