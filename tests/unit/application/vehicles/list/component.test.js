import toJson from 'enzyme-to-json';

import Component from '../../../../../src/scripts/application/vehicles/list/component.jsx';
import { mockComponent } from '../../../../tools/mock-component.jsx';

describe('Application/Vehicles/List/Component', () => {
  it('should match saved snapshot', () => {
    const wrapper = mockComponent({
      type: 'shallow',
      scope: Component,
      props: {
        vehicles: [],
        error: {},
      },
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should generate a list of data', () => {
    const wrapper = mockComponent({
      type: 'shallow',
      scope: Component,
      props: {
        vehicles: [
          {
            name: 'Colombo',
            cargo_capacity: '10',
            passengers: '1',
            vehicle_class: 'suv',
            cost_in_credits: '1234',
          },
        ],
        error: {},
      },
    });

    const list = [];

    expect(wrapper.find('.vehicle-entity').length).toEqual(1);
    expect(wrapper.find('div[data-type]').length).toEqual(5);

    wrapper.find('div[data-type]').forEach((node) => {
      list.push(node.text());
    });

    expect(list[0]).toEqual('Colombo');
    expect(list[1]).toEqual('10');
    expect(list[2]).toEqual('1');
    expect(list[3]).toEqual('suv');
    expect(list[4]).toEqual('1234');
  });

  it('should display error message', () => {
    const wrapper = mockComponent({
      type: 'shallow',
      scope: Component,
      props: {
        vehicles: [],
        error: {
          message: 'test error',
        },
      },
    });

    expect(wrapper.find('.error').length).toEqual(1);
  });
});
