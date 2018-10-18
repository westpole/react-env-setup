/**
 * This plugin should preserve only UI presentation configuration.
 * No user personal or account infromation should be here.
 */

// @TODO: add Error handler

export const loadState = (user) => {
  try {
    const serializedState = localStorage.getItem(user);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    // return as an empty configuration
    return {};
  }
};

export const saveState = (user, config) => {
  try {
    localStorage.setItem(user, JSON.stringify(config));
  } catch (error) {
    // Ask for a request to send the error message to dev.
    // Show the error notification to user.
  }
};
