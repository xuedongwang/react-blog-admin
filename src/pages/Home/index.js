import { connect } from 'react-redux'
import { fetchUserinfoAsync } from '@/actions'

import Home from './Home'

const mapStateToProps = state => ({
  todos: state.article
})

const mapDispatchToProps = dispatch => ({
  fetchUserinfoAsync: payload => dispatch(fetchUserinfoAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
