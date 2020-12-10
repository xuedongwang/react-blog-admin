import { connect } from 'react-redux'
import Common from './Common'

const mapStateToProps = state => ({
  breadcrumb: state.breadcrumb
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Common);
