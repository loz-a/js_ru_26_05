import React, { PropTypes } from 'react'

// function Comment(props) {
//     const { comment: {text, name} } = props
//
//     return (
//         <article>
//             <header>
//                 <h5>
//                     Posted By: {name}
//                 </h5>
//             </header>
//             <p>
//                 {text}
//             </p>
//         </article>
//     )
// }

let Comment = ({
    comment: {text, name}
}) => (
    <article>
        <header>
            <h5>
                Posted By: {name}
            </h5>
        </header>
        <p>
            {text}
        </p>
    </article>
)

Comment.propTypes = {
    comment: PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
