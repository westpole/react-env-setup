/**
 * Container component
 * @see https://redux.js.org/basics/usage-with-react#implementing-container-components
 */

import { connect } from 'react-redux';
import { AppStore } from 'Store/types';
import Notification from './Notification';

const mapStateToProps = (state: AppStore) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(Notification);
