# Redux Reducers

The main file should be `core.js` that combines all reducers into one map and expose it to the Application.

    import { combineReducers } from 'redux';

    // each state section should have it's own reducer
    import vehicleReducer from './vehicles';

    // initial state has be set here
    const initialState = {
      vehicles: [],
    };

    // this is a format of how State watcher should be written
    const vehicles = (state = initialState.vehicles, action) => {
      // If you have separate file for each type of reducer,
      // than you could use a Handler to map action type to a specific reducer.
      const handlers = {
        [CONSTANTS.FETCH_SUCCESS]: vehicleReducer,
      };

      // This is a replacement for the Switch operator.
      // In this way we would reduce number of code line
      // and would simplify the reducer function logic
      return handlers[action.type]
        ? handlers[action.type](state, action)
        : state;
    };

    const rootReducer = combineReducers({
      vehicles,
    });

    export default rootReducer;

### How to test rootReducer

There is no direct access to a map of combined reducers, but we could use Store functionality to test them.
So, in order to has code covered (and keep healthy code coverage level) you should use store.dispatch to trigger state update
as it was suggested by Dan Abramov [here](https://github.com/reduxjs/redux/issues/1412#issuecomment-184696008).

You could check an example for [core.js unit test](../../../tests/unit/store/reducers/core.test.js)

### Action types

If you use constants for an action type name,
then you should load the original file in a test file and use a reference to the action name.
In this way you will exclude a problem if the original action name was changed.