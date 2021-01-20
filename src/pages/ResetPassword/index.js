import { connect } from 'react-redux';
import ResetPassword from './ResetPassword';
import { user } from '@/actions';

const mapStateToProps = state => ({
  userLoginInfo: state.user.userLoginInfo
})

const mapDispatchToProps = dispatch => ({
  userResetPasswordAsync: payload => dispatch(user.userResetPasswordAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
