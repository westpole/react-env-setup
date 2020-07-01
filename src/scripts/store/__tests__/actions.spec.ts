/**
 * Based on redux-mock library
 * @see https://redux.js.org/recipes/writing-tests#action-creators
 */

import configureStore from 'redux-mock-store';
import { showMessage } from 'Store/actions';
import { initState } from 'Store/reducers';

const mockStore = configureStore([]);

describe('Store: Actions', () => {
  const store = mockStore(initState);

  it('should emit showMessage action', () => {
    store.dispatch(showMessage('test message'));

    const actions = store.getActions();

    expect(actions).toEqual([{
      type: 'SHOW_MESSAGE',
      dataText: 'test message',
      reason: 'info',
    }]);
  });
});
