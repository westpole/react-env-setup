/**
 * Usage of testing-library
 * @see https://testing-library.com/docs/react-testing-library/api#render
 * @see https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
 */

import React from 'react';
import { render } from '@testing-library/react';
import App from 'AppRoot/application/App';

describe('Application: main wrapper', () => {
  it('should render Application component', async () => {
    const { queryAllByText } = render(<App />);

    expect(queryAllByText('Home page').length).toEqual(1);
  });
});
