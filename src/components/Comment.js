import React, { PropTypes } from 'react'

function Comment(props) {
    const { comment: {text, user} } = props

    return (
        <article>
            <header>
                <h5>
                    Posted By: {user}
                </h5>
            </header>
            <p>
                {text}
            </p>
        </article>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
