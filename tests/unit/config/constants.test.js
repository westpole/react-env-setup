import CONSTANTS from '../../../src/scripts/config/constants';

describe('Config/Constants', () => {
  it('should contain actionsType map', () => {
    expect(CONSTANTS).toEqual({
      FETCH_DATA: 'FETCH_DATA',
      FETCH_SUCCESS: 'FETCH_SUCCESS',
      SORT_ASC: 'SORT_ASC',
      SORT_DESC: 'SORT_DESC',
    });
  });
});
