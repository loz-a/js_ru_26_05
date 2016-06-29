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
    comment: {text, user, id}
}) => (
    <article>
        <header>
            <h5>
                Posted By: {user}
            </h5>
            <h6>No:{id+1}</h6>  
        </header>
        <p>
            {text}
        </p>
    </article>
)

Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Comment
