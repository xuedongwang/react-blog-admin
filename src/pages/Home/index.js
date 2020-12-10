import { connect } from 'react-redux'
import { setArticles } from '@/actions'
import Home from './Home'

const mapStateToProps = state => ({
  todos: state.article
})

const mapDispatchToProps = dispatch => ({
  setArticles: payload => dispatch(setArticles(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
