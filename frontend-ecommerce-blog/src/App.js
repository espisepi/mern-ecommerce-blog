import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import 'uikit/dist/css/uikit.css';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

import './App.css';

import HomeScreen from './screens/HomeScreen';

// UIkit.use(Icons);

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
