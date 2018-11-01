import { all } from 'redux-saga/effects';

import watchFetchVehicles from '../store/saga-actions/fetch-vehicles';

export default function* rootSaga() {
  yield all([
    watchFetchVehicles(),
  ]);
}
