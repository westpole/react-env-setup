import actionsType from 'Config/constants';

describe('Configuration: Constants', () => {
  it('should contain actionsType map', () => {
    expect(actionsType).toEqual({
      FETCH_DATA: 'FETCH_DATA',
      FETCH_SUCCESS: 'FETCH_SUCCESS',
      ERROR_SERVER: 'ERROR_SERVER',
    });
  });
});
