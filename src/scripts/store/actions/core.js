import CONSTANTS from '../../config/constants';

export function fetchData(config = {}) {
  return {
    type: CONSTANTS.FETCH_DATA,
    page: config.page || 1,
    pageCount: config.pageCount || 10,
  };
}

export function sortData(direction = 'none') {
  return {
    type: CONSTANTS[`SORT_${direction.toUpperCase()}`] || 'none',
  };
}
