import { PropTypes } from 'react'

function Comment(props) {
    const { comment } = this.props

    return (
        <article>
            <header>
                <h4>
                    Posted By: {comment.name}
                </h4>
            </header>
            <p>
                {comment.text}
            </p>
        </article>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.num.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
