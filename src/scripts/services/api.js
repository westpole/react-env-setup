/**
 * This is a set of methods to communicate with remote services.
 */

// @TODO: register Error from server

export default {
  fetch(url) {
    return fetch(url).then(response => response.json());
  },
};
