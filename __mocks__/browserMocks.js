const localStorageMock = (() => {
  const local = {
    store: {},
    shouldFail: false,
  };

  return {
    getItem(key) {
      if (local.shouldFail) {
        throw new Error('Cannot read localstorage');
      }

      return local.store[key] || null;
    },
    setItem(key, value) {
      if (local.shouldFail) {
        throw new Error('Cannot write to localstorage');
      }

      local.store[key] = value.toString();
    },
    clear() {
      local.store = {};
    },
    setTriggerFail(flag) {
      local.shouldFail = flag;
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
