import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../../src/scripts/config/saga';
import CONSTANTS from '../../../src/scripts/config/constants';
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

  // setup Saga with Redux store
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  it('should fetch data', () => {
    const initState = {
      vehicles: [],
    };

    // subscribe to store changes:
    // this action is required as Redux runs reducer list in an async mode
    const unsubscribe = store.subscribe(() => {
      const newState = store.getState().vehicles;

      if (initState.vehicles.length !== newState.length) {
        expect(reducerSpy).toHaveBeenCalledWith([], {
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
        });

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
});
