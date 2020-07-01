import Api from 'Services/api';

describe('Services: Api', () => {
  describe('Fetch', () => {
    it('should return a response object', () => {
      window.fetch = jest
        .fn()
        .mockImplementation((url: string) => Promise.resolve({
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
