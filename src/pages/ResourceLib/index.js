import { connect } from 'react-redux'
import { common } from '@/actions'
import ResourceLib from './ResourceLib'

const mapStateToProps = state => ({
  statistics: state.common.statistics
})

const mapDispatchToProps = dispatch => ({
  fetchStatisticsAsync: payload => dispatch(common.fetchStatisticsAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceLib);
