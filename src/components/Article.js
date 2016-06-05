import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import ToggleOpen from '../decorators/ToggleOpen'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            id: PropTypes.string.isRequired,
            comments: PropTypes.array
        }),
        visibilityFlag: PropTypes.bool,
        openArticle: PropTypes.func,
        options: PropTypes.object
    }

    render() {
        const { article, visibilityFlag, toggleVisibility, notifyOpenArticleId } = this.props
        if (!article) return <h3>No article</h3>

        const body = !visibilityFlag ? null : <section>{article.text}</section>
        const comments = !visibilityFlag ? null : <CommentList comments={article.comments} />

        const clickHandler = (evt) => {
            if (visibilityFlag) toggleVisibility()
            else notifyOpenArticleId()
        }

        return (
            <div>
                <h3 onClick = {clickHandler}>{article.title}</h3>
                {body}
                {comments}
            </div>
        )
    }
}

export default ToggleOpen(Article)
