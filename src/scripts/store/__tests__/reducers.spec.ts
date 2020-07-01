/**
 * Based on redux-mock library
 * @see https://redux.js.org/recipes/writing-tests#reducers
 */

import { addMessage, initState } from 'Store/reducers';

describe('Store: Reducers', () => {
  describe('addMessage reducer', () => {
    it(
      'should return an initial state if no state and action type provided',
      () => {
        expect(addMessage(undefined, { type: 'NONE' })).toEqual(initState);
      },
    );

    it('should return specified state if no action type provided', () => {
      const newState = {
        ...initState,
        notification: {
          message: 'initial message',
          reason: 'test',
        },
      };

      expect(addMessage(newState, { type: 'NONE' })).toEqual(newState);
    });

    it('should return specified state if no action type provided', () => {
      const newState = {
        ...initState,
        notification: {
          message: 'another message',
          reason: 'test',
        },
      };
      const action = {
        type: 'SHOW_MESSAGE',
        dataText: 'another message',
        reason: 'test',
      };

      expect(addMessage(initState, action)).toEqual(newState);
    });
  });
});
