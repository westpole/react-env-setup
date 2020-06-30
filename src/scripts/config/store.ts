/**
 * Store configuration.
 * This one is implemented with Redux library.
 *
 * Redux official documentation:
 * @see https://react-redux.js.org/introduction/basic-tutorial
 */

import { createStore } from 'redux';
import rootReducer from 'Store/reducers';

const store = createStore(rootReducer);

export default store;
