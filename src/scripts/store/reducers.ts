import { combineReducers } from 'redux';
import { Action } from 'Store/actions';

interface Store {
  notification: {
    message: string | undefined;
    reason: string | undefined;
  };
}

function addMessage(state: Store, action: Action): Store {
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
