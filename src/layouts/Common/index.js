import { connect } from 'react-redux'
import Common from './Common'

const mapStateToProps = state => {
  return {
    breadcrumb: state.common.breadcrumb,
    user: state.user.info
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Common);
