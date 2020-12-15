import { all } from 'redux-saga/effects';

import { watchFetchUserinfoAsync } from './user';

export default function * rootSaga () {
  yield all([
    watchFetchUserinfoAsync(),
  ]);
}