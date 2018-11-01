import { takeLatest } from 'redux-saga/effects';

import CONSTANTS from '../../config/constants';
import fetchActionGenerator from './helpers/fetch-action';

/**
 * Set a watcher for a fetch data event
 * and cancels any previous similar requests
 *
 * @yields {object} action
 */
export default function* watchFetchVehicles() {
  yield takeLatest(CONSTANTS.FETCH_DATA, fetchActionGenerator('vehicles'));
}
