import CONSTANTS from '../../config/constants';

/**
 * Fetch data action handler
 *
 * @param   {Object} config action configurator
 *
 * @returns {Object}        event data
 */
export function fetchData(config = {}) {
  return {
    type: CONSTANTS.FETCH_DATA,
    page: config.page || 1,
    pageCount: config.pageCount || 10,
  };
}

/**
 * Sort data action handler
 *
 * @param   {String} direction sort direction
 *
 * @returns {Object}           event data
 */
export function sortData(direction = 'none') {
  return {
    type: CONSTANTS[`SORT_${direction.toUpperCase()}`] || 'none',
  };
}
