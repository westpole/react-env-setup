/**
 * Usage of testing-library
 * @see https://testing-library.com/docs/react-testing-library/api#render
 * @see https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
 */

import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { initState } from 'Store/reducers';
import Coordinator from 'Root/components/coordinator';

describe('Components: Coordinator', () => {
  const mockStore = configureStore([]);

  it('should dispatch an action with a message', () => {
    const store = mockStore(initState);

    render(
      <Provider store={store}>
        <Coordinator />
      </Provider>,
    );

    expect(store.getActions()).toEqual([
      {
        type: 'SHOW_MESSAGE',
        dataText: 'Hello, how are you?',
        reason: 'info',
      },
    ]);
  });
});
