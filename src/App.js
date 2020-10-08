import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact={true} component={HomeScreen} />
      </div>
    </BrowserRouter>
  );
}

export default App;
