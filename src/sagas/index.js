import { all } from 'redux-saga/effects';

import { watchFetchUserinfoAsync } from './user';
import { watchFetchLoginQRCode } from './common';

export default function * rootSaga () {
  yield all([
    watchFetchUserinfoAsync(),
    watchFetchLoginQRCode(),
  ]);
}