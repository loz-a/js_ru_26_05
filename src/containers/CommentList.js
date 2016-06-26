import React, { PropTypes } from 'react'
import CommentList from '../components/CommentList'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'
import { getRelation } from '../store/utils'

// function CommentListContainer(props) {
//     return (
//         <CommentList {...props}
//             comments = {props.comments}/>
//     )
// }

const CommentListContainer = (props) =>
    (<CommentList
        article = {props.article}
        loadAllComments = {props.loadAllComments}
        loading = {props.loading}
        loaded = {props.loaded}
        comments = {props.comments} />)

export default connect(
    (state, ownProps) => ({
        comments: getRelation(ownProps.article, 'comments'),
        loading: state.comments.get('loading'),
        loaded: state.comments.get('loaded')
    }),
    { loadAllComments }
)(CommentListContainer)
