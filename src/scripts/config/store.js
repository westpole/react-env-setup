/**
 * Store configuration.
 * This one is implemented with Redux library.
 *
 * Redux official documentatino:
 * @see https://redux.js.org/basics/usagewithreact
 *
 * Saga official documentation:
 * @see  https://redux-saga.js.org/docs/basics/
 *
 * Application store tree:
 *
 *  store: {
 *    vehicles: [ ... ],
 *    sort: {
 *      type: "asc|desc|null",
 *      column: <column id>,
 *    },
 *    page: {
 *      number: <page #>,
 *      size: <how many items per page>,
 *    },
 *    selected: [ list of item.id ]
 *  }
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../store/reducers/core';
import rootSaga from './saga';
import logManager from './log-manager';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

if (process.env.NODE_ENV !== 'production') {
  store.dispatch = logManager.extendDispatch(store.dispatch);
}

sagaMiddleware.run(rootSaga);

export default store;
