import { SET_USERINFO, SET_LOGIN_INFO } from '@/actions/actionTypes';

const initState = {
  info: {},
  userLoginInfo: {}
};

const article = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        userLoginInfo: action.payload
      };
    case SET_USERINFO:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
}

export default article;