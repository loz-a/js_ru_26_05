import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import ToggleOpen from '../decorators/ToggleOpen'
import { deleteArticle } from '../AC/articles'
import moment from 'moment'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            id: PropTypes.string.isRequired,
            comments: PropTypes.array,
            date: PropTypes.string.isRequired
        }),
        openFlag: PropTypes.bool,
        toggleOpen: PropTypes.func.isRequired,
        notifyOpenId: PropTypes.func.isRequired,
        options: PropTypes.object
    }

    handleDeleteArticle = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
        deleteArticle(this.props.article.id);
    }

    static ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.substr(1)
    }

    render() {
        const { article, openFlag, toggleOpen, notifyOpenId } = this.props
        if (!article) return <h3>No article</h3>

        const body = !openFlag ? null : <section>{article.text}</section>
        const comments = !openFlag ? null : <CommentList comments={article.getRelation('comments')} />

        const clickHandler = (evt) => {
            if (openFlag) toggleOpen()
            else notifyOpenId()
        }

        return (
            <article>
                <header>
                    <h3 onClick = {clickHandler}>{article.title}
                        <a href = "" onClick = {this.handleDeleteArticle}>[delete]</a>
                    </h3>
                    <p>
                        <time pubdate datetime = {article.date}>
                            {Article.ucfirst(moment(new Date(article.date)).fromNow())}
                        </time>
                    </p>
                </header>
                {body}
                {comments}
            </article>
        )
    }
}

export default ToggleOpen(Article)
