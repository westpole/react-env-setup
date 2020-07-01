/**
 * Usage of testing-library
 * @see https://testing-library.com/docs/react-testing-library/api#render
 * @see https://testing-library.com/docs/dom-testing-library/api-queries#bytestid
 */

import React from 'react';
import { render } from '@testing-library/react';
import Store from 'Store/index';

describe('Store: main wrapper', () => {
  it('should render a Store component with a child component', async () => {
    const App = render(
      <Store>
        <h1 data-testid="title">Title</h1>
      </Store>,
    );

    expect(App.queryAllByTestId('title').length).toEqual(1);
    expect(App.queryAllByText('Title').length).toEqual(1);
  });
});
