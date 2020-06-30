import React from 'react';
import Store from 'Store/index';

import Notification from 'Root/components/notification';

function App() {
  return (
    <Store>
      <>
        <h1>Home page</h1>
        <Notification />
      </>
    </Store>
  );
}

export default App;
