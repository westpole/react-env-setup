import toJson from 'enzyme-to-json';

import Container from '../../../../../src/scripts/application/vehicles/list/container';
import { mockWithStore } from '../../../../tools/mock-component.jsx';

describe('Application/Vehicles/List/Container', () => {
  it('should match saved snapshot', () => {
    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
      initialState: {
        vehicles: [],
      },
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should connect Container to the Store', () => {
    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
      initialState: {
        vehicles: [],
      },
    });

    expect(wrapper.instance().store).toBeDefined();
  });

  it('should pass Properties to the Component', () => {
    const wrapper = mockWithStore({
      type: 'shallow',
      scope: Container,
      initialState: {
        vehicles: [],
      },
    });

    expect(wrapper.props()).toEqual({
      dispatch: expect.any(Function),
      vehicles: [],
    });
  });
});
