import { connect } from 'react-redux'
import { fetchStatisticsAsync } from '@/actions'

import Home from './Home'

const mapStateToProps = state => ({
  statistics: state.common.statistics
})

const mapDispatchToProps = dispatch => ({
  fetchStatisticsAsync: payload => dispatch(fetchStatisticsAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
