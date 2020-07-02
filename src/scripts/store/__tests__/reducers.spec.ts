/**
 * Based on redux-mock library
 * @see https://redux.js.org/recipes/writing-tests#reducers
 */

import { notification, initState } from 'Store/reducers';

describe('Store: Reducers', () => {
  describe('notification reducer', () => {
    it(
      'should return an initial state if no state and action type provided',
      () => {
        expect(notification(undefined, { type: 'NONE' })).toEqual(initState);
      },
    );

    it('should return specified state if no action type provided', () => {
      const newState = {
        message: 'initial message',
        reason: 'test',
      };

      expect(notification(newState, { type: 'NONE' })).toEqual(newState);
    });

    it('should return specified state if no action type provided', () => {
      const newState = {
        message: 'another message',
        reason: 'test',
      };
      const action = {
        type: 'SHOW_MESSAGE',
        dataText: 'another message',
        reason: 'test',
      };

      expect(notification(initState.notification, action)).toEqual(newState);
    });
  });
});
