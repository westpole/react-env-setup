import errorMap from '../../../../src/scripts/store/reducers/error-map';
import CONSTANTS from '../../../../src/scripts/config/constants';

describe('Store/reducers/errorMap', () => {
  it('should return a previous state if action type was not defined', () => {
    const action = {
      type: 'other',
      message: '',
    };
    const newState = errorMap({}, action);

    expect(newState).toEqual({});
  });

  it('should return new state', () => {
    const action = {
      type: CONSTANTS.ERROR_SERVER_LIST,
      message: 'test message',
    };
    const newState = errorMap({}, action);

    expect(newState).toEqual({
      type: CONSTANTS.ERROR_SERVER_LIST,
      message: 'test message',
    });
  });
});
