import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_CATEGORY_LIST_ASYNC,
  SET_CATEGORY_LIST,
  SET_CATEGORY_LIST_LOADING
} from '@/actions/actionTypes';

import * as Api from '@/api';

function * fetchCategoryListAsync ({ payload }) {
  try {
    yield put({type: SET_CATEGORY_LIST_LOADING, payload: true})
    const { data } = yield call(() => Api.fetchCategoryList(payload));
    yield put({type: SET_CATEGORY_LIST_LOADING, payload: false})
    yield put({ type: SET_CATEGORY_LIST, payload: data });
  } catch (error) {
    throw error;
  }
}

export function * watchFetchCategoryList () {
  try {
    yield takeEvery(FETCH_CATEGORY_LIST_ASYNC, fetchCategoryListAsync);
  } catch (error) {
    throw error
  }
};
