import toJson from 'enzyme-to-json';

import { mockWithStore } from '../../../tools/mock-component.jsx';
import Container from '../../../../src/scripts/application/vehicles/container';
import * as actions from '../../../../src/scripts/store/actions/core';

describe('Application/Vehicles/Container', () => {
  it('should match saved snapshot', () => {
    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should connect Container to the Store', () => {
    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
    });

    expect(wrapper.instance().store).toBeDefined();
  });

  it('should dispatch an event to fetch vehicles data', () => {
    const spy = jest.spyOn(actions, 'fetchData');

    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
    });

    wrapper.props().fetchVehicles();

    expect(spy.mock.calls.length).toEqual(1);
  });
});
