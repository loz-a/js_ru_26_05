import React, { PropTypes, Component } from 'react'
import Comment from './Comment'
import ToggleOpen from '../decorators/ToggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        openFlag: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const { comments, openFlag, toggleOpen } = this.props

        if (!comments) return null

        const commentItems = !openFlag ? null : comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        const visibilityTitle   = !openFlag ? 'Show' : 'Hide'

        return (
            <section>
                <h4>
                    <a href="#" onClick={toggleOpen}>{visibilityTitle} {comments.length} comments</a>:
                 </h4>
                {commentItems}
            </section>
        )
    }
}

export default ToggleOpen(CommentList)
