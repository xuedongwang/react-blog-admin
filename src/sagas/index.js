import { all } from 'redux-saga/effects';

import { watchFetchUserinfoAsync } from './user';
import { watchFetchArticleListAsync } from './article';
import { watchFetchLoginQRCode, watchFetchStatistics } from './common';

export default function * rootSaga () {
  yield all([
    watchFetchUserinfoAsync(),
    watchFetchArticleListAsync(),
    watchFetchLoginQRCode(),
    watchFetchStatistics(),
  ]);
}