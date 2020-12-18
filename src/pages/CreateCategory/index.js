import { connect } from 'react-redux'
import CreateCategory from './CreateCategory'
import { setBreadcrumb } from '@/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  setBreadcrumb : payload => dispatch(setBreadcrumb(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategory);
