import React from 'react';
import Store from 'Store/index';
import Coordinator from 'Root/components/coordinator';

function App() {
  return (
    <Store>
      <>
        <h1>Home page</h1>
        <Coordinator />
      </>
    </Store>
  );
}

export default App;
