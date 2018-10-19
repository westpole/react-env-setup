# Redux store

### Persistent state

Persistent state could be specified as a second parameter for `createStore` function.

    const persistent = { ... };
    const store = createStore(rootReducer, persistent);

### Browser LocalStorage API

Use localStorage to save App state. This way data should be safe even after browser window refresh.

Use `Try ... catch` when work with localstorage.

### Subscribe

Subscribe to the store and run any function on state change.
It should be used only for a very specific case.

    store.subscribe(() => {
      saveState(store.getState());
    });

### lodash.throttle

Use it to control number of calls to saveState function for example.

    store.subscribe(
      _.throttle(
        () => {
          saveState(store.getState());
        },
        1000
      )
    );
