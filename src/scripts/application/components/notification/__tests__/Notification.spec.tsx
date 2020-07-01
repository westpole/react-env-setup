/**
 * Usage of testing-library
 * @see https://testing-library.com/docs/react-testing-library/api#render
 * @see https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
 */

import React from 'react';
import { render } from '@testing-library/react';
import Notification from 'Root/components/notification';

describe('Components: Notification', () => {
  it('should render component', async () => {
    const { queryAllByText } = render(<Notification />);

    expect(queryAllByText('Notification message').length).toEqual(1);
  });
});
