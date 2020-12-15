import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_USERINFO_ASYNC,
  SET_USERINFO
} from '@/actions/actionTypes';
import * as Api from '@/api';

function * fetchUserinfoAsync () {
  try {
    const { data } = yield call(Api.fetchUserinfo);
    yield put({ type: SET_USERINFO, data });
  } catch (error) {
    throw error;
  }
}

export function * watchFetchUserinfoAsync () {
  try {
    yield takeEvery(FETCH_USERINFO_ASYNC, fetchUserinfoAsync);
  } catch (error) {
    throw error
  }
};
