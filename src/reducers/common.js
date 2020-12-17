import { SET_QR_CODE } from '@/actions/actionTypes';

const initState = {};

const common = (state = initState, action) => {
  switch (action.type) {
    case SET_QR_CODE:
      action.data.loginQRCode = action.data.url;
      return action.data;
    default:
      return state;
  }
}

export default common;