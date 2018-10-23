import { loadState, saveState } from '../../../src/scripts/config/local-storage';

describe('Config/local-storage', () => {
  describe('loadState', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should retrieve data by record id', () => {
      saveState('test', { one: 1 });

      expect(loadState('test')).toEqual({
        one: 1,
      });
    });

    it('should return an undefined if record was not found', () => {
      expect(loadState('test')).toBeUndefined();
    });
  });

  describe('saveState', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should save data to localstorage and return TRUE on success', () => {
      expect(saveState('test', { or: 1 })).toEqual(true);
    });
  });
});
