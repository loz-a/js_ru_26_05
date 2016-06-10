import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import ToggleOpen from '../decorators/ToggleOpen'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            id: PropTypes.string.isRequired,
            comments: PropTypes.array,
            createAt: PropTypes.string.isRequired
        }),
        openFlag: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired,
        notifyOpenId: PropTypes.func.isRequired,
        options: PropTypes.object
    }

    deleteArticle = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
        console.log(`delete article ${this.props.article.id}`);
    }

    render() {
        const { article, openFlag, toggleOpen, notifyOpenId } = this.props
        if (!article) return <h3>No article</h3>

        const body = !openFlag ? null : <section>{article.text}</section>
        const comments = !openFlag ? null : <CommentList comments={article.comments} />

        const clickHandler = (evt) => {
            if (openFlag) toggleOpen()
            else notifyOpenId()
        }

        return (
            <div>
                <h3 onClick = {clickHandler}>{article.title}
                    <a href = "" onClick = {this.deleteArticle}>[delete]</a>
                </h3>
                {body}
                {comments}
            </div>
        )
    }
}

export default ToggleOpen(Article)
