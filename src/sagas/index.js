import { all } from 'redux-saga/effects';

import { watchFetchUserinfo, watchUserLogin } from './user';
import { watchFetchArticleList } from './article';
import { watchFetchStatistics } from './common';

export default function * rootSaga () {
  yield all([
    watchFetchUserinfo(),
    watchFetchArticleList(),
    watchUserLogin(),
    watchFetchStatistics(),
  ]);
}