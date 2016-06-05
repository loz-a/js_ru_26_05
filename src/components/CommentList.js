import React, { PropTypes, Component } from 'react'
import Comment from './Comment'
import ToggleOpen from '../decorators/ToggleOpen'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        // from toggleOpen decorator
        visibilityFlag: PropTypes.bool,
        toggleVisibility: PropTypes.func
    }

    render() {
        const { comments, visibilityFlag, toggleVisibility } = this.props

        if (!comments) return null

        const commentItems = !visibilityFlag ? null : comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        const visibility   = !visibilityFlag ? 'Show' : 'Hide'

        return (
            <section>
                <h4>
                    <a href="#" onClick={toggleVisibility}>{visibility} {comments.length} comments</a>:
                 </h4>
                {commentItems}
            </section>
        )
    }
}

export default ToggleOpen(CommentList)
