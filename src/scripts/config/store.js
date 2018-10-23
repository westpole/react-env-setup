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

/**
 * Add logging of dispatch data in development mode
 *
 * @param  {object}   store Redux store
 *
 * @return {function}       enhanced dispatch function
 */
const addLoggingToDispatch = function addLoggingToDispatch(store) {
  /* eslint-disable no-console */

  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = rawDispatch(action);

    console.groupEnd(action.type);

    return returnValue;
  };

  /* eslint-enable no-console */
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

if (process.env.NODE_ENV !== 'production') {
  store.dispatch = addLoggingToDispatch(store);
}

sagaMiddleware.run(rootSaga);

export default store;
