import React from 'react';
import Store from 'Store/index';
import Coordinator from 'Components/coordinator';

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
