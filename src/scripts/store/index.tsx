import React from 'react';
import { Provider } from 'react-redux';
import store from 'Config/store';

interface Props {
  children: React.ReactChild;
}

export function Store({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
