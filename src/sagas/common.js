import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_QR_CODE_ASYNC,
  SET_QR_CODE,
  FETCH_STATISTICS_ASYNC,
  SET_STATISTICS,
} from '@/actions/actionTypes';
import * as Api from '@/api';

// 登录二维码
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

// 统计数据
function * fetchStatisticsAsync ({ payload }) {
  try {
    const { data } = yield call(() => Api.fetchStatistics(payload));
    yield put({ type: SET_STATISTICS, data });
  } catch (error) {
    throw error;
  }
}
export function * watchFetchStatistics () {
  try {
    yield takeEvery(FETCH_STATISTICS_ASYNC, fetchStatisticsAsync);
  } catch (error) {
    throw error
  }
};
