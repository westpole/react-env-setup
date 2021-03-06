import { ObjectAnnotation } from 'Config/types';

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
export default function outputLog(id: string, type: string, info: any[]) {
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
