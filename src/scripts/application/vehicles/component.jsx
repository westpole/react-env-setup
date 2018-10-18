/**
 * Representation for StarWars vehicle data.
 *
 * Composition:
 *  top:
 *    page description
 *    static HTML blocks
 *
 *  middle:
 *    data list component
 *
 *  footer:
 *    page navigation and clear button
 *    data navigation component
 *    clear page configuration component
 */

import React from 'react';
import PropTypes from 'prop-types';

import List from './list/container';

class VehiclesComponent extends React.Component {
  constructor(props) {
    super(props);

    // request for data on Component load
    this.componentDidMount = function componentDidMount() {
      const { fetchVehicles } = this.props;

      // Populate list with data on page load;
      // dispatch an action to Saga
      fetchVehicles();
    };
  }

  render() {
    return (
      <article className="vehicles-wrapper">
        <h1>Star Wars vehicles dictionary</h1>
        <List {...this.props} />
      </article>
    );
  }
}

VehiclesComponent.propTypes = {
  fetchVehicles: PropTypes.func.isRequired,
};

export default VehiclesComponent;
