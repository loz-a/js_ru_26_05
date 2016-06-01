import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment } = props

    return (
        <article>
            <header>
                <h5>
                    Posted By: {comment.name}
                </h5>
            </header>
            <p>
                {comment.text}
            </p>
        </article>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
