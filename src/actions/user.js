import {
  FETCH_USERINFO_ASYNC,
  SET_USERINFO,
  USER_LOGIN_ASYNC,
  SET_LOGIN_INFO
} from './actionTypes';

export const fetchUserinfoAsync = () => {
  return {
    type: FETCH_USERINFO_ASYNC
  };
};

export const setUserinfo = payload => {
  return {
    type: SET_USERINFO,
    payload
  };
};

export const userLoginAsync = payload => {
  return {
    type: USER_LOGIN_ASYNC,
    payload
  };
};

export const setLoginInfo = payload => {
  return {
    type: SET_LOGIN_INFO,
    payload
  };
};