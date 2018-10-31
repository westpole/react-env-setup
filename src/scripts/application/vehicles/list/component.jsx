import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

const columnHeaderList = {
  name: 'Name',
  cargo_capacity: 'Cargo capacity',
  passengers: 'Passengers',
  vehicle_class: 'Vehicle class',
  cost_in_credits: 'Cost in credits',
};

const enabledColumnList = [
  'name',
  'cargo_capacity', 'passengers',
  'vehicle_class', 'cost_in_credits',
];

/**
 * Format data output
 *
 * @param   {array}  item vehicle entity
 *
 * @returns {object}      vehicle entity DOM representation
 */
function generateList(item) {
  return (
    <section className="row" key={uuidv4()}>
      {enabledColumnList.map(key => (
        <div className="cell" data-type={key} key={uuidv4()}>
          {item[key]}
        </div>
      ))}
    </section>
  );
}

function generateListHeader() {
  return (
    <section className="header">
      {enabledColumnList.map(key => (
        <div className="cell" key={uuidv4()}>
          {columnHeaderList[key]}
        </div>
      ))}
    </section>
  );
}

/**
 * List component
 *
 * #name: vehicles-list
 *
 * @param {object} props Parent Component scope
 */
class Component extends React.PureComponent {
  render() {
    const { vehicles, error } = this.props;

    if (error.message) {
      return (
        <article className="message error">
          {error.message}
        </article>
      );
    }

    return (
      <article className="table">
        {generateListHeader()}
        {vehicles.map(generateList)}
      </article>
    );
  }
}

Component.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cargo_capacity: PropTypes.string.isRequired,
      passengers: PropTypes.string.isRequired,
      vehicle_class: PropTypes.string.isRequired,
      cost_in_credits: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
};

export default Component;
