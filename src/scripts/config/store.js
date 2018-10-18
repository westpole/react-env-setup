/**
 * Store configuration.
 * This one is implemented with Redux library.
 *
 * Redux official documentatino:
 * @see https://redux.js.org/basics/usagewithreact
 *
 * Saga official documentation:
 * @see  https://redux-saga.js.org/docs/basics/
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

// @TODO: test store.subscribe()

export default store;
