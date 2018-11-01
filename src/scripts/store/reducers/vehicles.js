import CONSTANTS from '../../config/constants';
import logManager from '../../config/log-manager';

/**
 * Log new state
 *
 * @param   {string} type      type of action
 * @param   {array}  prevState previous state
 * @param   {array}  newState  new updated state
 *
 * @returns {array}            new updated state
 */
function logData(type, prevState, newState) {
  if (process.env.NODE_ENV !== 'production') {
    logManager.outputLog(
      'state',
      type,
      [
        prevState,
        newState,
      ],
    );
  }

  return newState;
}

/**
 * Vehicle data state updater
 *
 * @param   {Array}  state  previous data state
 * @param   {Object} action event data
 *
 * @returns {Array}         new data state
 */
export default function vehicleReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_SUCCESS:
      return logData(
        CONSTANTS.FETCH_SUCCESS,
        state,
        [
          ...state,
          ...action.vehicles,
        ],
      );

    default:
      return state;
  }
}
