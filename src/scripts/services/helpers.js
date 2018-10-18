/**
 * A set of useful tools.
 */

/**
 * Sort a list of objects in an ascending direction
 *
 * @param   {string}   title an object property that used for value comparison
 *
 * @returns {function}       sort function
 */
const sortAsc = function sortAsc(title) {
  return function asc(a, b) {
    if (a[title] > b[title]) {
      return 1;
    }

    if (a[title] < b[title]) {
      return -1;
    }

    return 0;
  };
};

/**
 * Sort a list of objects in an descending direction
 *
 * @param   {string}   title an object property that used for value comparison
 *
 * @returns {function}       sort function
 */
const sortDesc = function sortDesc(title) {
  return function desc(a, b) {
    if (a[title] < b[title]) {
      return 1;
    }

    if (a[title] > b[title]) {
      return -1;
    }

    return 0;
  };
};

export default {
  sortAsc,
  sortDesc,
};
