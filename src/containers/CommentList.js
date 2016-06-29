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

class CommentListContainer extends React.Component {

    componentDidMount() {
        this.props.loadAllComments()
    }

    render() {
        const { article, loadAllComments, loading, loaded, comments } = this.props

        return (
            <CommentList
                article = {article}
                loadAllComments = {loadAllComments}
                loading = {loading}
                loaded = {loaded}
                comments = {comments} />
        )
    }
}

export default connect(
    (state, ownProps) => ({
        comments: getRelation(state, ownProps.article, 'comments'),
        loading: state.comments.get('loading'),
        loaded: state.comments.get('loaded')
    }),
    { loadAllComments }
)(CommentListContainer)
