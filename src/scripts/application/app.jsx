/**
 * This is the Application core.
 * It should connect together React, Redux and Saga.
 */

// @TODO: investigate if need to load webworker for Saga requests

import React from 'react';
import { Provider } from 'react-redux';

import store from '../config/store';
import VehiclesApp from './vehicles/container';

const App = function App(props) {
  return (
    <Provider store={store}>
      <VehiclesApp {...props} />
    </Provider>
  );
};

export default App;
