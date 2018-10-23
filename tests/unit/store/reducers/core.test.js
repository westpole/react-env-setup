import { createStore } from 'redux';

import rootReducer from '../../../../src/scripts/store/reducers/core';
import CONSTANTS from '../../../../src/scripts/config/constants';

const store = createStore(rootReducer);

describe('Store/reducers/core', () => {
  it('should add vehicles reducer to a listeners list', () => {
    expect(store.getState().vehicles).toEqual([]);
  });

  it('should trigger an update the vehicles state', () => {
    store.dispatch({
      type: CONSTANTS.FETCH_SUCCESS,
      vehicles: [
        { one: true },
      ],
    });

    expect(store.getState().vehicles).toEqual([
      { one: true },
    ]);
  });

  it('should not trigger an update if action is not defined', () => {
    store.dispatch({
      type: 'other',
      vehicles: [
        { two: true },
      ],
    });

    expect(store.getState().vehicles).toEqual([
      { one: true },
    ]);
  });
});
