/**
 * This is the Application core.
 * It should connect together React, Redux and Saga.
 */

import React from 'react';
import { Provider } from 'react-redux';

import store from '../config/store';
import VehiclesApp from './vehicles/container';

/**
 * Application root.
 * It should compose store and HOC on this level.
 *
 * @param   {object} props a set of parameters from ReactDOM.render
 *
 * @returns {object}       React component
 */
const App = function App(props) {
  return (
    <Provider store={store}>
      <VehiclesApp {...props} />
    </Provider>
  );
};

export default App;
