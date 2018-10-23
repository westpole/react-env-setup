import Helpers from '../../../src/scripts/services/helpers';

let unsortedArray;

describe('Services/helpers', () => {
  beforeEach(() => {
    unsortedArray = [
      { name: 1 },
      { name: 1 },
      { name: 2 },
      { name: 12 },
      { name: 7 },
      { name: 15 },
    ];
  });

  describe('sortAsc', () => {
    it('should return a function that sorts values in ascendance order', () => {
      const sortAsc = Helpers.sortAsc('name');

      expect(unsortedArray.sort(sortAsc)).toEqual([
        { name: 1 },
        { name: 1 },
        { name: 2 },
        { name: 7 },
        { name: 12 },
        { name: 15 },
      ]);
    });
  });

  describe('sortDesc', () => {
    it('should return a function that sorts values in descendance order', () => {
      const sortDesc = Helpers.sortDesc('name');

      expect(unsortedArray.sort(sortDesc)).toEqual([
        { name: 15 },
        { name: 12 },
        { name: 7 },
        { name: 2 },
        { name: 1 },
        { name: 1 },
      ]);
    });
  });
});
