/**
 * Usage of testing-library
 * @see https://testing-library.com/docs/react-testing-library/api#render
 * @see https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
 */

import React from 'react';
import { render } from '@testing-library/react';
import { initState } from 'Store/reducers';
import Notification from 'Components/notification/Notification';

describe('Components: Notification', () => {
  it('should not display message by default', async () => {
    const { queryAllByTestId } = render(
      <Notification notification={initState.notification} />,
    );

    expect(queryAllByTestId('notification').length).toEqual(0);
  });

  it('should not display message by default', async () => {
    const notifyMe = {
      message: 'Test message',
      reason: 'Just say Hi',
    };

    const { queryAllByTestId, queryAllByText } = render(
      <Notification notification={notifyMe} />,
    );

    expect(queryAllByTestId('notification').length).toEqual(1);

    expect(queryAllByText('Test message').length).toEqual(1);
    expect(queryAllByText('reason: Just say Hi').length).toEqual(1);
  });
});
