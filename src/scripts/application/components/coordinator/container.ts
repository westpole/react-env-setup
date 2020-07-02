/**
 * Container component
 * @see https://redux.js.org/basics/usage-with-react#implementing-container-components
 */

import { connect } from 'react-redux';
import { showMessage } from 'Store/actions';
import Coordinator from './Coordinator';

const mapDispatchToProps = (dispatch: Function) => ({
  greetings: (message: string) => {
    dispatch(showMessage(message));
  },
});

export default connect(null, mapDispatchToProps)(Coordinator);
