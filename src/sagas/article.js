import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_ARTICLE_LIST_ASYNC,
  SET_ARTICLE_LIST
} from '@/actions/actionTypes';

import * as Api from '@/api';

function * fetchArticleListAsync ({ payload }) {
  try {
    const { data } = yield call(() => Api.fetchArticleList(payload));
    yield put({ type: SET_ARTICLE_LIST, payload: data });
  } catch (error) {
    throw error;
  }
}

export function * watchFetchArticleListAsync () {
  try {
    yield takeEvery(FETCH_ARTICLE_LIST_ASYNC, fetchArticleListAsync);
  } catch (error) {
    throw error
  }
};
