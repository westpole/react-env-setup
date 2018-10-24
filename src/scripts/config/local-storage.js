/**
 * This plugin should preserve only UI presentation configuration.
 * No user personal or account infromation should be here.
 */

import logManager from './log-manager';

export const loadState = (user) => {
  try {
    const serializedState = localStorage.getItem(user);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      logManager.outputLog(
        'error',
        `localStorage: retrieve config for ${user}`,
        [user],
      );
    }

    // return an empty configuration on error
    return {};
  }
};

export const saveState = (user, config) => {
  try {
    localStorage.setItem(user, JSON.stringify(config));

    return true;
  } catch (error) {
    // Ask for a request to send the error message to dev.
    // Show the error notification to user.
    return false;
  }
};
