import { connect } from 'react-redux';

import Component from './component.jsx';

/**
 * Expose state of store section to it's Component
 *
 * @param   {object} state Application store state
 *
 * @returns {object}       Component store section current state
 */
const mapStateToProps = state => ({
  vehicles: state.vehicles,
  error: state.error,
});

export default connect(
  mapStateToProps,
)(Component);
