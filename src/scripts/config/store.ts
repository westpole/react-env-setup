/**
 * Store configuration.
 * This one is implemented with Redux library.
 *
 * Redux official documentatino:
 * @see https://redux.js.org/basics/usagewithreact
 */

import { createStore } from 'redux';
import rootReducer from 'Store/reducers';

const store = createStore(rootReducer);

export default store;
