import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_ARTICLE_LIST_ASYNC,
  SET_ARTICLE_LIST,
  SET_ARTICLE_LIST_LOADING
} from '@/actions/actionTypes';

import * as Api from '@/api';

function * fetchArticleListAsync ({ payload }) {
  try {
    yield put({type: SET_ARTICLE_LIST_LOADING, payload: true})
    const { data } = yield call(() => Api.fetchArticleList(payload));
    yield put({ type: SET_ARTICLE_LIST, payload: data });
    yield put({type: SET_ARTICLE_LIST_LOADING, payload: false})
  } catch (error) {
    throw error;
  }
}

export function * watchFetchArticleList () {
  try {
    yield takeEvery(FETCH_ARTICLE_LIST_ASYNC, fetchArticleListAsync);
  } catch (error) {
    throw error
  }
};
