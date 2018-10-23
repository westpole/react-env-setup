import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockMap = {
  shallow,
  mount,
};

/**
 * Check parameters
 *
 * @param   {object} params mock Component parameters
 *
 * @returns {object}        sanitized map of parameters
 */
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

/**
 * Generates shallow or mount copy of React Component
 *
 * @param   {object} params mock parameters
 *
 * @returns {object}        wrapper for React component
 */
export function mockComponent(params) {
  // type could be shallow or mount
  // scope is a React Component
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

/**
 * Generates shallow or mount copy of Redux Container htat connected to a React Component
 *
 * @param   {object} params mock parameters
 *
 * @returns {object}        wrapper for React component
 */
export function mockWithStore(params) {
  // type could be shallow or mount
  // scope is a React Component
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
