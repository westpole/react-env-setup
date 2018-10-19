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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
