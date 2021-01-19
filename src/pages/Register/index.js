import { connect } from 'react-redux';
import Register from './Register';
import { user } from '@/actions';

const mapStateToProps = state => ({
  userLoginInfo: state.user.userLoginInfo
})

const mapDispatchToProps = dispatch => ({
  userRegisterAsync: payload => dispatch(user.userRegisterAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
