import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CommentsPagination from '../components/CommentsPagination'
import { loadItemsPerPage } from '../AC/comments'
import { toArray } from '../store/utils'

const ITEM_COUNT_PER_PAGE = 5

class CommentsPaginationContainer extends React.Component {

    componentDidMount() {
        const { loading, loadItemsPerPage } = this.props
        if (!loading) loadItemsPerPage(ITEM_COUNT_PER_PAGE)
    }

    componentWillReceiveProps(nextProps) {
        const { loading, loadItemsPerPage, params: {page} } = nextProps
        const offset = (page-1) * ITEM_COUNT_PER_PAGE
        if (!loading && page !== this.props.params.page) loadItemsPerPage(ITEM_COUNT_PER_PAGE, offset)
    }

    render() {
        const { comments, total, loading } = this.props

        if (loading) return <h4>Loading...</h4>
        if (!comments) return <h4>No comments yet</h4>

        return <CommentsPagination
            comments={comments}
            itemCountPerPage={ITEM_COUNT_PER_PAGE}
            totalItemCount={total} />
    }

}

export default connect(
    (state, ownProps) => ({
        comments: toArray(state.comments.get('entities').toJS()),
        loading: state.comments.get('loading'),
        total: state.comments.get('total')
    }),
    { loadItemsPerPage }
)(CommentsPaginationContainer)
