import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects';

import Api from '../services/api';
import CONSTANTS from './constants';
import logManager from './log-manager';

/**
 * Retrieves data by provided URL and dispatches an event with response payload
 *
 * @yields {object} server response with a list of results property
 */
function* fetchVehicles() {
  try {
    const response = yield call(
      Api.fetch,
      'https://swapi.co/api/vehicles/',
    );

    const action = {
      type: CONSTANTS.FETCH_SUCCESS,
      vehicles: response.results,
    };

    if (process.env.NODE_ENV !== 'production') {
      logManager.outputLog('action', CONSTANTS.FETCH_SUCCESS, [action]);
    }

    yield put(action);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      logManager.outputLog(
        'error',
        'Saga: fetchVehicles',
        [error],
      );
    }

    yield put({
      type: CONSTANTS.ERROR_SERVER_LIST,
      message: 'There is an issue with connection to a server.',
    });
  }
}

/**
 * Set a watcher for a fetch data event
 * and cancels any previous similar requests
 *
 * @yields {object} action
 */
function* watchFetchVehicles() {
  yield takeLatest(CONSTANTS.FETCH_DATA, fetchVehicles);
}

export default function* rootSaga() {
  yield all([
    watchFetchVehicles(),
  ]);
}
