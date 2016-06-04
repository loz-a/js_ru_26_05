import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            id: PropTypes.string.isRequired,
            comments: PropTypes.array
        }),
        isOpen: PropTypes.bool,
        openArticle: PropTypes.func,
        options: PropTypes.object
    }

    render() {
        const { article, openArticle, isOpen } = this.props
        if (!article) return <h3>No article</h3>

        const body = isOpen ? <section>{article.text}</section> : null
        const comments = isOpen ? <CommentList comments={article.comments} /> : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }
}

export default Article
