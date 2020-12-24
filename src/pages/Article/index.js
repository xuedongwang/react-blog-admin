import { connect } from 'react-redux'
import Article from './Article'
import { fetchArticleListAsync } from '@/actions'

const mapStateToProps = state => ({
  article: state.article
})

const mapDispatchToProps = dispatch => ({
  fetchArticleListAsync: payload => dispatch(fetchArticleListAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
