import { SET_USERINFO, SET_LOGIN_INFO } from '@/actions/actionTypes';

const initState = {};

const article = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGIN_INFO:
      return {
        ...state,
        userLoginInfo: action.data
      };
    case SET_USERINFO:
      return {
        ...state,
        info: action.data
      };
    default:
      return state;
  }
}

export default article;