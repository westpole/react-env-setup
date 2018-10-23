import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockMap = {
  shallow,
  mount,
};

function checkParams(params) {
  // check params type

  if (!mockMap[params.type]) {
    throw Error('You should specify mock type');
  }

  if (!params.scope) {
    throw Error('You should pass a scope (Component, Container, etc.)');
  }

  if (!params.props) {
    return Object.assign(params, { props: {} });
  }

  return params;
}

export function mockComponent(params) {
  const {
    type,
    props = {},
    scope: Scope,
    initialState = {},
  } = checkParams(params);

  return mockMap[type](
    <Scope {...props} />,
    initialState,
  );
}

export function mockWithStore(params) {
  const {
    type,
    props = {},
    scope: Scope,
    initialState = {},
  } = checkParams(params);

  const storeMock = configureStore();

  return mockMap[type](
    <Scope {...props} />,
    {
      context: {
        store: storeMock(initialState),
      },
    },
  );
}
