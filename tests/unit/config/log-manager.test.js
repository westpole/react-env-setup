import logManager from '../../../src/scripts/config/log-manager';

describe('Config/LogManager', () => {
  describe('extendDispatch', () => {
    const rawDispatch = jest
      .fn()
      .mockImplementation(action => action);

    it('should return new dispatch function', () => {
      const newDispatch = logManager.extendDispatch(rawDispatch);

      expect(newDispatch).toEqual(expect.any(Function));
    });

    it('should return action data on dispatch', () => {
      const newDispatch = logManager.extendDispatch(rawDispatch);

      expect(newDispatch('someAction')).toEqual('someAction');
    });
  });
});
