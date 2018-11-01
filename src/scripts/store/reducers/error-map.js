import CONSTANTS from '../../config/constants';

/**
 * Error state updater
 *
 * @param   {Object} state  previous data state
 * @param   {Object} action event data
 *
 * @returns {Object}        new data state
 */
export default function errorMap(state, action) {
  switch (action.type) {
    case CONSTANTS.ERROR_SERVER_LIST:
      return Object.assign({}, state, action);

    default:
      return state;
  }
}
