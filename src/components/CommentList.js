import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isHide: true
    }

    render() {
        const { comments } = this.props
        const { isHide }   = this.state

        if (!comments) return null

        const commentItems = isHide ? null : comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        const visibility   = isHide ? 'Show' : 'Hide'

        return (
            <section>
                <h4>
                    <a href="#" onClick={this.toggleVisibility}>{visibility} {comments.length} comments</a>:
                 </h4>
                {commentItems}
            </section>
        )
    }

    toggleVisibility = (evt) => {
        this.setState({
            isHide: !this.state.isHide
        })
    }
}

CommentList.propTypes = {
    comments: PropTypes.array
}

export default CommentList
