import { connect } from 'react-redux';

import { fetchData } from '../../store/actions/core';
import Component from './component.jsx';

/**
 * Connect Component actions to the Store
 *
 * @param   {function} dispatch Action dispatcher
 *
 * @returns {object}            map Component props to store dispatch list
 *                              (fetchVehicles is avalable from Component's this.props)
 */
const mapDispatchToProps = dispatch => ({
  fetchVehicles: config => dispatch(fetchData(config)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Component);
