import { connect } from 'react-redux'
import CreateCategory from './CreateCategory'
import { common } from '@/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setBreadcrumb : payload => dispatch(common.setBreadcrumb(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategory);
