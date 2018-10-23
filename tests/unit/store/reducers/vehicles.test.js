import vehiclesReducer from '../../../../src/scripts/store/reducers/vehicles';
import CONSTANTS from '../../../../src/scripts/config/constants';

describe('Store/reducers/vehicles', () => {
  it('should return a previous state if action type was not defined', () => {
    const action = {
      type: 'other',
      vehicles: [
        { superCar: 'root' },
      ],
    };
    const newState = vehiclesReducer([], action);

    expect(newState).toEqual([]);
  });

  it('should return new state', () => {
    const action = {
      type: CONSTANTS.FETCH_SUCCESS,
      vehicles: [
        { superCar: 'root' },
      ],
    };
    const newState = vehiclesReducer([], action);

    expect(newState).toEqual([
      { superCar: 'root' },
    ]);
  });
});
