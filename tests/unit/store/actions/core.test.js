import CONSTANTS from '../../../../src/scripts/config/constants';
import { fetchData, sortData } from '../../../../src/scripts/store/actions/core';

describe('Store/Actions/Core', () => {
  describe('fetchData action', () => {
    it('should return payload with default values', () => {
      expect(fetchData()).toEqual({
        type: CONSTANTS.FETCH_DATA,
        page: 1,
        pageCount: 10,
      });
    });

    it('should return payload with specified page and pageCount values', () => {
      const payload = fetchData({
        page: 5,
        pageCount: 20,
      });

      expect(payload).toEqual({
        type: CONSTANTS.FETCH_DATA,
        page: 5,
        pageCount: 20,
      });
    });
  });

  describe('sortData', () => {
    it('should return type as "none" if direction is unknown', () => {
      expect(sortData()).toEqual({
        type: 'none',
      });
    });

    it('should return type as "none" if direction is unknown', () => {
      expect(sortData('asc')).toEqual({
        type: 'SORT_ASC',
      });
    });
  });
});
