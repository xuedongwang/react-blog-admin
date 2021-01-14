import { connect } from 'react-redux'
import Article from './Article'
import { article } from '@/actions'

const mapStateToProps = state => ({
  article: state.article,
  loading: state.article.loading
})

const mapDispatchToProps = dispatch => ({
  fetchArticleListAsync: payload => dispatch(article.fetchArticleListAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
