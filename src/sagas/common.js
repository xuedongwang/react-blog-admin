import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_QR_CODE_ASYNC,
  SET_QR_CODE
} from '@/actions/actionTypes';
import * as Api from '@/api';

function * fetchLoginQRCodeAsync ({ payload }) {
  try {
    const { data } = yield call(() => Api.fetchLoginQRCode(payload));
    yield put({ type: SET_QR_CODE, data });
  } catch (error) {
    throw error;
  }
}

export function * watchFetchLoginQRCode () {
  try {
    yield takeEvery(FETCH_QR_CODE_ASYNC, fetchLoginQRCodeAsync);
  } catch (error) {
    throw error
  }
};
