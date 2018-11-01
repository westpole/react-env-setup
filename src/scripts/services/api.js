/**
 * This is a set of methods to communicate with remote services.
 */

export default {
  /**
   * Fetch data from remote repository
   *
   * @param   {string} url server url
   *
   * @returns {object}     Promise object
   */
  fetch(url) {
    return fetch(url).then(response => response.json());
  },
};
