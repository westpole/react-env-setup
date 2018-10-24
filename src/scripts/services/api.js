/**
 * This is a set of methods to communicate with remote services.
 */

export default {
  fetch(url) {
    return fetch(url).then(response => response.json());
  },
};
