import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_STATISTICS_ASYNC,
  SET_STATISTICS,
} from '@/actions/actionTypes';
import * as Api from '@/api';

// 统计数据
function * fetchStatisticsAsync ({ payload }) {
  try {
    const { data } = yield call(() => Api.fetchStatistics(payload));
    yield put({ type: SET_STATISTICS, payload: data });
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
