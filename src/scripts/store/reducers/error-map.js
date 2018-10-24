import CONSTANTS from '../../config/constants';

export default function errorMap(state, action) {
  switch (action.type) {
    case CONSTANTS.ERROR_SERVER_LIST:
      return Object.assign({}, state, action);

    default:
      return state;
  }
}
