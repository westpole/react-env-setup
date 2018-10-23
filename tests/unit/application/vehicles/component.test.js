import toJson from 'enzyme-to-json';

import Component from '../../../../src/scripts/application/vehicles/component.jsx';
import { mockComponent } from '../../../tools/mock-component.jsx';

describe('Application/Vehicles/Component', () => {
  const spy = jest.fn();

  it('should match saved snapshot', () => {
    const wrapper = mockComponent({
      type: 'shallow',
      scope: Component,
      props: {
        fetchVehicles: spy,
      },
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should fetch data after load', () => {
    const spyComponentDidMount = jest.spyOn(Component.prototype, 'componentDidMount');

    const wrapper = mockComponent({
      type: 'shallow',
      scope: Component,
      props: {
        fetchVehicles: spy,
      },
    });

    expect(wrapper.find('[fetchVehicles]').length).toEqual(1);
    expect(spyComponentDidMount.mock.calls.length).toEqual(1);
  });
});
