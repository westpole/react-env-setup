import {
  call,
  put,
} from 'redux-saga/effects';

import Api from '../../../services/api';
import CONSTANTS from '../../../config/constants';
import logManager from '../../../config/log-manager';

/**
 * Factory: create a handler for a fetch action.
 * It should retrieve data by provided URL and data type,
 * and dispatche an event with a response payload.
 *
 * @params {string}   type  data name
 *
 * @return {function}       function generator for Saga watcher
 */
export default function fetchActionGenerator(type) {
  // @yields {object} server response with a list of results property
  return function* fetchAction() {
    try {
      const response = yield call(
        Api.fetch,
        `https://swapi.co/api/${type}/`,
      );

      const action = {
        type: CONSTANTS.FETCH_SUCCESS,
        [type]: response.results,
      };

      if (process.env.NODE_ENV !== 'production') {
        logManager.outputLog('action', CONSTANTS.FETCH_SUCCESS, [action]);
      }

      yield put(action);
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        logManager.outputLog(
          'error',
          `Saga: fetch ${type}`,
          [error],
        );
      }

      yield put({
        type: CONSTANTS.ERROR_SERVER_LIST,
        message: 'There is an issue with connection to a server.',
      });
    }
  };
}
