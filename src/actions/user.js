import { FETCH_USERINFO_ASYNC, SET_USERINFO } from './actionTypes';

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