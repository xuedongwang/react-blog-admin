import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_USERINFO_ASYNC,
  SET_USERINFO,
  USER_LOGIN_ASYNC,
  SET_LOGIN_INFO,
} from '@/actions/actionTypes';
import * as Api from '@/api';

function * fetchUserinfoAsync () {
  try {
    const { data } = yield call(Api.fetchUserinfo);
    yield put({ type: SET_USERINFO, payload: data });
  } catch (error) {
    throw error;
  }
}

export function * watchFetchUserinfo () {
  try {
    yield takeEvery(FETCH_USERINFO_ASYNC, fetchUserinfoAsync);
  } catch (error) {
    throw error
  }
};

// 登录
function * userLoginAsync ({ payload }) {
  try {
    const { data } = yield call(() => Api.userLogin(payload));
    yield put({ type: SET_LOGIN_INFO, payload: data });
  } catch (error) {
    throw error;
  }
}
export function * watchUserLogin () {
  try {
    yield takeEvery(USER_LOGIN_ASYNC, userLoginAsync);
  } catch (error) {
    throw error
  }
};
