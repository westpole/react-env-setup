import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

/**
 * Format data output
 *
 * @param   {array}  item vehicle entity
 *
 * @returns {object}      vehicle entity DOM representation
 */
function generateList(item) {
  const dataList = [
    'name',
    'cargo_capacity', 'passengers',
    'vehicle_class', 'cost_in_credits',
  ];

  return (
    <section className="vehicle-entity" key={uuidv4()}>
      {dataList.map((key) => (
        <div data-type={key} key={uuidv4()}>
          {item[key]}
        </div>
      ))}
    </section>
  );
}

/**
 * List component
 *
 * @param {object} props Parent Component scope
 */
const Component = function ListComponent(props) {
  const { vehicles } = props;

  return (
    <article className="vehicle-list">
      {vehicles.map(generateList)}
    </article>
  );
};

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
};

export default Component;
