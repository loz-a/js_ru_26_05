import React, { PropTypes, Component } from 'react'
import ToggleOpen from '../decorators/ToggleOpen'
import Comment from './Comment'
import CommentDialog from './CommentDialog'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        openFlag: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired,
        articleId: PropTypes.string.isRequired
    }

    render() {
        const {
            comments,
            openFlag,
            toggleOpen,
            articleId
        } = this.props

        if (!comments) return null

        const commentItems = !openFlag ? null : comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        const visibilityTitle   = !openFlag ? 'Show' : 'Hide'

        return (
            <section>
                <h4>
                    <a href="#" onClick={toggleOpen}>{visibilityTitle} {comments.length} comments</a>:
                 </h4>
                {commentItems}
                <CommentDialog
                    articleId = {articleId}
                    toggleOpen = {toggleOpen}
                    openFlag = {openFlag} />
            </section>
        )
    }
}

export default ToggleOpen(CommentList)
