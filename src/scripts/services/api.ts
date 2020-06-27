/**
 * This is a set of methods to communicate with remote services.
 */

export default {
  /**
   * Fetch data from remote repository
   */
  async fetch(url: string): Promise<any> {
    return fetch(url).then(response => response.json());
  },
};
