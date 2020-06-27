import { ObjectAnnotation } from 'Config/types';
import { Store } from 'Store/types';

const outputColorScheme: ObjectAnnotation = {
  action: 'color: blue',
  state: 'color: grey',
  error: 'color: red',
};

/**
 * Output data into Browser console
 *
 * NOTE: this function is not coverred by unit test
 * as we rely on output only in development mode.
 * Also it polutes test runner output.
 */
/* istanbul ignore next */
export function outputLog(id: string, type: string, info: any[]) {
  /* eslint-disable no-console */

  if (process.env.NODE_ENV === 'test') {
    return;
  }

  if (!console.group) {
    info.forEach((i) => {
      console.log(i);
    });

    console.log('-------------');

    return;
  }

  console.group(type);

  info.forEach((value: ObjectAnnotation, index: number) => {
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

  console.groupEnd();

  /* eslint-enable no-console */
}

/**
 * Log data that goes throught store.dispatch
 */
export function extendDispatch(rawDispatch: Function): Function {
  return (action: ObjectAnnotation) => {
    outputLog('action', action.type, [action]);

    // return action object to the store
    return rawDispatch(action);
  };
};

/**
 * Log new state
 */
export function logStateChange(
  type: string,
  prevState: Store,
  newState: Store
): Store {
  if (process.env.NODE_ENV !== 'production') {
    outputLog(
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
