import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../Dashboard';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
