import CONSTANTS from '../../config/constants';

export default function vehicleReducer(state, action) {
  switch (action.type) {
    case CONSTANTS.FETCH_SUCCESS:
      return [
        ...state,
        ...action.vehicles,
      ];

    default:
      return state;
  }
}
