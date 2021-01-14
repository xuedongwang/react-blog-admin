import { connect } from 'react-redux'
import Category from './Category'
import { category } from '@/actions'

const mapStateToProps = state => ({
  category: state.category
})

const mapDispatchToProps = dispatch => ({
  fetchCategoryListAsync: () => dispatch(category.fetchCategoryListAsync())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
