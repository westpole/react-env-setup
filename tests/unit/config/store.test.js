import store from '../../../src/scripts/config/store';

describe('Config/Store', () => {
  it('should return a Redux store entity', () => {
    const {
      dispatch,
      subscribe,
      getState,
    } = store;

    expect(dispatch).toBeDefined();
    expect(subscribe).toBeDefined();
    expect(getState).toBeDefined();
  });
});
