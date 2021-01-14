import { all } from 'redux-saga/effects';

import { watchFetchUserinfo, watchUserLogin } from './user';
import { watchFetchArticleList } from './article';
import { watchFetchCategoryList } from './category';
import { watchFetchStatistics } from './common';

export default function * rootSaga () {
  yield all([
    watchFetchCategoryList(),
    watchFetchUserinfo(),
    watchFetchArticleList(),
    watchUserLogin(),
    watchFetchStatistics(),
  ]);
}