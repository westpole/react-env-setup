/**
 * Store configuration.
 * This one is implemented with Redux library.
 *
 * Redux official documentation:
 * @see https://react-redux.js.org/introduction/basic-tutorial
 *
 * Logger for Redux:
 * @see https://github.com/LogRocket/redux-logger
 * LogRocket is a production Redux logging tool
 * that lets you replay problems as if they happened in your own browser.
 * Instead of guessing why errors happen, or asking users for screenshots
 * and log dumps, LogRocket lets you replay Redux actions + state,
 * network requests, console logs, and see a video of what the user saw.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'Store/reducers';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

export default store;
