import React, { PropTypes } from 'react'
import CommentList from '../components/CommentList'
import { connect } from 'react-redux'
import { getRelation } from '../store/utils'

function CommentListContainer(props) {
    return (
        <CommentList {...props}
            comments = {props.comments}/>
    )
}

export default connect(
    (state, ownProps) => ({comments: getRelation(ownProps.article, 'comments')})
)(CommentListContainer)
