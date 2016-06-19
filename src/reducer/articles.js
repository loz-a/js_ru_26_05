import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import comments from './comments'

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(
                (article) => article.id !== payload.id
            )

        case ADD_COMMENT:                      
            return articles.map(
                (article) => {
                    //плохо - вы мутируете article
                    if (article.id === payload.articleId) article.comments.push(payload.id)
                    return article
                }
            )
        default:
    }
    return articles
}
