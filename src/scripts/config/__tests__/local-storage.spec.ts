import { loadState, saveState } from 'Config/local-storage';

describe('Configuration: local-storage', () => {
  const backupEnv = process.env;

  afterAll(() => {
    process.env = backupEnv;
  });

  describe('loadState', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.resetModules();

      process.env = { ...backupEnv };
    });

    afterEach(() => {
      localStorage.setTriggerFail(false);
    });

    it('should retrieve data by record id', () => {
      saveState('test', { one: 1 });

      expect(loadState('test')).toEqual({
        one: 1,
      });
    });

    it('should return NULL if record was not found', () => {
      expect(loadState('test')).toBeNull();
    });

    it('should return NULL if there is an error', () => {
      localStorage.setTriggerFail(true);

      expect(loadState('test')).toBeNull();
    });
  });

  describe('saveState', () => {
    beforeEach(() => {
      localStorage.clear();
      jest.resetModules();

      process.env = { ...backupEnv };
    });

    afterEach(() => {
      localStorage.setTriggerFail(false);
    });

    it('should save data to localstorage and return TRUE on success', () => {
      expect(saveState('test', { or: 1 })).toEqual(true);
    });

    it('should return FALSE if there is an error', () => {
      localStorage.setTriggerFail(true);

      expect(saveState('test', { or: 1 })).toEqual(false);
    });
  });
});
