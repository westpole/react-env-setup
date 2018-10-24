import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../../src/scripts/config/saga';
import CONSTANTS from '../../../src/scripts/config/constants';
import logManager from '../../../src/scripts/config/log-manager';
import Api from '../../../src/scripts/services/api';

describe('Config/saga', () => {
  // mock response for an API call
  const spy = jest
    .spyOn(Api, 'fetch')
    .mockImplementation(() => Promise.resolve({
      results: [
        {
          name: 'Colombo',
          cargo_capacity: '10',
          passengers: '1',
          vehicle_class: 'suv',
          cost_in_credits: '1234',
        },
      ],
    }));

  // mock vehicles reducer
  const reducerSpy = jest.fn().mockReturnValue([
    {
      name: 'Colombo',
      cargo_capacity: '10',
      passengers: '1',
      vehicle_class: 'suv',
      cost_in_credits: '1234',
    },
  ]);

  // setup Redux reducer to include our mocked one
  const rootReducer = combineReducers({
    vehicles(state = [], action) {
      const handlers = {
        [CONSTANTS.FETCH_SUCCESS]: reducerSpy,
      };

      return handlers[action.type]
        ? handlers[action.type](state, action)
        : state;
    },
  });

  let outputLogSpy;

  afterEach(() => {
    outputLogSpy.mockRestore();
  });

  it('should fetch data', () => {
    const initState = {
      vehicles: [],
      error: {},
    };

    outputLogSpy = jest.spyOn(logManager, 'outputLog');

    // setup Saga with Redux store
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    // subscribe to store changes:
    // this action is required as Redux runs reducer list in an async mode
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState().vehicles;
      const action = {
        type: 'FETCH_SUCCESS',
        vehicles: [
          {
            name: 'Colombo',
            cargo_capacity: '10',
            passengers: '1',
            vehicle_class: 'suv',
            cost_in_credits: '1234',
          },
        ],
      };

      if (initState.vehicles.length !== newState.length) {
        expect(reducerSpy).toHaveBeenCalledWith([], action);

        expect(outputLogSpy).toHaveBeenCalledWith(
          'action',
          CONSTANTS.FETCH_SUCCESS,
          [action],
        );

        // do not forget to unsubscribe from the store
        unsubscribe();
      }
    });

    // simulate data fetch request
    store.dispatch({
      type: CONSTANTS.FETCH_DATA,
      page: 1,
      pageCount: 10,
    });

    expect(spy.mock.calls.length).toEqual(1);
  });

  it('should not call to output log to browser console', () => {
    const initState = {
      vehicles: [],
      error: {},
    };

    outputLogSpy = jest.spyOn(logManager, 'outputLog');

    process.env.NODE_ENV = 'production';

    // setup Saga with Redux store
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    // subscribe to store changes:
    // this action is required as Redux runs reducer list in an async mode
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState().vehicles;

      if (initState.vehicles.length !== newState.length) {
        expect(outputLogSpy).not.toHaveBeenCalled();

        // do not forget to unsubscribe from the store
        unsubscribe();

        // restore NODE ENV value
        process.env.NODE_ENV = 'test';
      }
    });

    // simulate data fetch request
    store.dispatch({
      type: CONSTANTS.FETCH_DATA,
      page: 1,
      pageCount: 10,
    });
  });
});
