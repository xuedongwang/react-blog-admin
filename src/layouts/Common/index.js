import { connect } from 'react-redux'
import Common from './Common'

const mapStateToProps = state => ({
  breadcrumb: state.common.breadcrumb,
  user: state.user.info
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Common);
