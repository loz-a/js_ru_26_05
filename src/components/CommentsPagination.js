import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Comment from './Comment'

class CommentsPagination extends React.Component {

    render() {
        const { itemCountPerPage, totalItemCount } = this.props
        const pageCount = Math.ceil(totalItemCount / itemCountPerPage)

        const pages = this.getPages(pageCount)
        const comments = this.getCommentList()

        return (
            <section>
                <ul>
                    {pages}
                </ul>
                <h4>Comments:</h4>
                {comments}
            </section>
        )
    }

    getPages(pageCount) {
        const result = []
        const { itemCountPerPage } = this.props

        for (let i = 1; i <= pageCount; i++) {
            result.push(
                <li key={i}>
                    <Link to={`/comments/${i}`}>
                        Page {i}
                    </Link>
                </li>
            )
        }
        return result
    }

    getCommentList() {
        const { comments } = this.props
        const items = comments.map(
            (comment) => (<Comment key={comment.id} comment={comment} />)
        )
        return <div>{items}</div>
    }
}

CommentsPagination.propTypes = {
    comments: PropTypes.array.isRequired,
    itemCountPerPage: PropTypes.number.isRequired,
    totalItemCount: PropTypes.number
}

export default CommentsPagination
