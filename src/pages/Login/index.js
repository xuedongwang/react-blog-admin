import { connect } from 'react-redux';
import Login from './Login';
import { userLoginAsync } from '@/actions';

const mapStateToProps = state => ({
  userLoginInfo: state.user.userLoginInfo
})

const mapDispatchToProps = dispatch => ({
  userLoginAsync: payload => dispatch(userLoginAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
