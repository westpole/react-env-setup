const outputColorScheme = {
  action: 'color: blue',
  state: 'color: grey',
  error: 'color: red',
};

/**
 * Output data into Browser console
 *
 * @param   {string} id   event id
 * @param   {string} type action type
 * @param   {array}  info list of action data
 *
 * @returns {undefined}
 */
function outputLog(id, type, info) {
  /* eslint-disable no-console */

  if (!console.group) {
    info.forEach((i) => {
      console.log(i);
    });

    console.log('-------------');

    return;
  }

  console.group(type);

  info.forEach((value, index) => {
    if (id === 'state') {
      console.log(
        `%c ${(index > 0 ? 'new state' : 'prev state')}:`,
        outputColorScheme[id],
        value,
      );

      return;
    }

    console.log(`%c ${id}:`, outputColorScheme[id], value);
  });

  console.groupEnd(type);

  /* eslint-enable no-console */
}

/**
 * Log data that goes throught store.dispatch
 *
 * @param   {function} rawDispatch original dispatch function
 *
 * @returns {function}             updated dispatch function
 */
const extendDispatch = function extendDispatch(rawDispatch) {
  return (action) => {
    outputLog('action', action.type, [action]);

    // return action object to the store
    return rawDispatch(action);
  };
};

const logError = function logError() {
  // @TODO: implement
};

export default {
  outputLog,
  extendDispatch,
  logError,
};
