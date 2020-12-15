import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
  FETCH_ARTICLES_ASYNC,
  SET_ARTICLES
} from '@/actions/actionTypes';
import Api from '@/api';

function * watchFetchArticlesAsync () {
  yield takeEvery(FETCH_ARTICLES_ASYNC, fetchArticlesAsync);
};

function * fetchArticlesAsync () {
  try {
    const data = yield call(Api.fetchArticles);
    yield put({ type: SET_ARTICLES, data });
  } catch (error) {
    throw error;
  }
}

export default function * rootSaga () {
  yield all([
    watchFetchArticlesAsync(),
  ]);
}