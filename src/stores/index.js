import Article from './Article'
import BaseStore from './BaseStore'
import {normalizedArticles, normalizedComments} from '../fixtures'

export const stores = {}

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new BaseStore(stores, normalizedComments)
})

export const articleStore = stores.articles
export const commentStore = stores.comments

window.articleStore = articleStore
