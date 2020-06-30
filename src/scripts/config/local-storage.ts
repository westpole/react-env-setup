/**
 * This plugin should preserve only UI presentation configuration.
 * No user personal or account infromation should be here.
 */

import outputLog from 'Config/log-manager';
import { ObjectAnnotation } from 'Config/types';

/**
 * Retrieve data from localStorage by ID
 */
export const loadState = (id: string): ObjectAnnotation | null => {
  try {
    const serializedState = localStorage.getItem(id);

    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      outputLog(
        'error',
        `localStorage: retrieve data by id = ${id}`,
        [id],
      );
    }

    return null;
  }
};

/**
 * Insert data into localStorage by ID
 */
export const saveState = (id: string, data: ObjectAnnotation): boolean => {
  try {
    localStorage.setItem(id, JSON.stringify(data));

    return true;
  } catch (error) {
    outputLog(
      'error',
      `localStorage: cannot save data for id = ${id}`,
      [id],
    );

    return false;
  }
};
