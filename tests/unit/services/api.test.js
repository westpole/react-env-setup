import Api from '../../../src/scripts/services/api';

describe('Services/Api', () => {
  describe('Fetch', () => {
    it('should return a response object', () => {
      window.fetch = jest
        .fn()
        .mockImplementation(url => Promise.resolve({
          json() {
            return { result: url };
          },
        }));

      Api
        .fetch('some')
        .then((response) => {
          expect(response).toEqual({ result: 'some' });
        });
    });
  });
});
