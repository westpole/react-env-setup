import { combineReducers } from 'redux';
import { Action } from 'Store/actions';
import { NotificationType, AppStore } from 'Store/types';

export const initState: AppStore = {
  notification: {
    message: '',
    reason: '',
  },
};

export function notification(
  state: NotificationType = initState.notification,
  action: Action,
): NotificationType {
  switch (action.type) {
    case 'SHOW_MESSAGE': {
      return {
        message: action.dataText,
        reason: action.reason,
      };
    }

    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  notification,
});

export default rootReducer;
