import { combineReducers } from 'redux';
import { Action } from 'Store/actions';
import { AppStore } from 'Store/types';

export const initState: AppStore = {
  notification: {
    message: '',
    reason: '',
  },
};

export function addMessage(
  state: AppStore = initState,
  action: Action,
): AppStore {
  switch (action.type) {
    case 'SHOW_MESSAGE': {
      return {
        ...state,
        notification: {
          message: action.dataText,
          reason: action.reason,
        },
      };
    }

    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  addMessage,
});

export default rootReducer;
