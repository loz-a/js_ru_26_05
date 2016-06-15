import React, { PropTypes } from 'react'
import CommentList from './CommentList'
import { deleteArticle } from '../AC/article'
import moment from 'moment'

class Article extends React.Component {

    handleDeleteArticle = (evt) => {
        evt.preventDefault()
        evt.stopPropagation()
        deleteArticle(this.props.article.id);
    }

    static ucfirst(str) {
        return str.charAt(0).toUpperCase() + str.substr(1)
    }

    render() {
        const { article, isOpen, openArticle } = this.props
        if (!article) return <h3>No article</h3>

        const body = this.getBody()

        return (
            <article>
                <header>
                    <h3 onClick = {openArticle}>{article.title}
                        <a href = "#" onClick = {this.handleDeleteArticle}>[delete]</a>
                    </h3>
                    <p>
                        <time pubdate datetime = {article.date}>
                            {Article.ucfirst(moment(new Date(article.date)).fromNow())}
                        </time>
                    </p>
                </header>
                {body}
            </article>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return <section>
            {article.text}
            <CommentList article = {article} />
        </section>
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired,
        comments: PropTypes.array,
        date: PropTypes.string.isRequired
    }),
    isOpen: PropTypes.bool,
    openArticle: PropTypes.func.isRequired,
    options: PropTypes.object
}

export default Article
