import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'

class ArticleContainer extends React.Component {

    render() {
        const { article, loadingText } = this.props
        const articleAsObj = article !== undefined ? article.toJS() : article

        console.info('--article ', articleAsObj)
        return <Article
            article={articleAsObj}
            isOpen={true}
            loadingText={loadingText}/>
    }
}

export default connect(
    (state, props) => {
        debugger
        const { params: {id} } = props
        return {
            article: state.articles.getIn(['entities', id]),
            loadingText: state.articles.get('loadingText')
        }
    }
)(ArticleContainer)
