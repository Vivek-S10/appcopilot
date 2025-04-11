import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PropertyDetails from '../pages/PropertyDetails';
import UserDashboard from '../pages/UserDashboard';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/dashboard" component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default Routes;