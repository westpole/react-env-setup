import toJson from 'enzyme-to-json';

import { mockComponent } from '../../tools/mock-component.jsx';
import App from '../../../src/scripts/application/app.jsx';

describe('Application/app', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mockComponent({
      type: 'shallow',
      scope: App,
      props: {
        testProp: 'test',
      },
    });
  });

  it('should match saved snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should return a React object for Component as a function', () => {
    const AppMock = App({ testProp: 1 });

    expect(AppMock.props.children.props.testProp).toEqual(1);
    expect(AppMock.props.store).toBeDefined();
  });

  it('should have store object set', () => {
    expect(wrapper.find('[store]').length).toBeDefined();
  });

  it('should set properties for the Application', () => {
    expect(wrapper.find('[testProp="test"]').length).toEqual(1);
  });
});
