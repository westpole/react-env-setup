/**
 * Main point of React application that connects App with an HTML DOM.
 * No need to test this file as it is pretty straight forward
 * and implementation is already tested by Facebook.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './application/app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('application'),
);
