import { connect } from 'react-redux';
import Login from './Login';
import { fetchQRCodeAsync } from '@/actions';

const mapStateToProps = state => ({
  loginQRCode: state.common.loginQRCode
})

const mapDispatchToProps = dispatch => ({
  fetchQRCodeAsync: payload => dispatch(fetchQRCodeAsync(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
