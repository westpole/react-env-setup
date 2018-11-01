import { combineReducers } from 'redux';

import CONSTANTS from '../../config/constants';

// list of Reducers
import vehicleReducer from './vehicles';
import errorMap from './error-map';

const initialState = {
  vehicles: [],
  error: {},
};

/**
 * Vehicles data reducer
 *
 * @param   {Array}  state  current data state
 * @param   {Object} action event data
 *
 * @returns {Array}         new data state
 */
const vehicles = (state = initialState.vehicles, action) => {
  // each reducer is mapped as <event name>: <reducer fn>
  const handlers = {
    [CONSTANTS.FETCH_SUCCESS]: vehicleReducer,
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

/**
 * Error data reducer
 *
 * @param   {Object} state  current error state
 * @param   {Object} action event data
 *
 * @returns {Object}        new error state
 */
const error = (state = initialState.error, action) => {
  const handlers = {
    [CONSTANTS.ERROR_SERVER_LIST]: errorMap,
  };

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state;
};

// import tools from '../../services/tools';

// function sortReducer(state, order, column) {
//   switch (order) {
//     case CONSTANTS.SORT_ASC:
//       return state.sort(tools.sortAsc(column));

//     case CONSTANTS.SORT_DESC:
//       return state.sort(tools.sortDesc(column));

//     default:
//       return state;
//   }
// }

// any name below should be the same as we are using in any Component/Container to access a data
const rootReducer = combineReducers({
  vehicles,
  error,
});

export default rootReducer;
