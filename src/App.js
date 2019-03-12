import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Dashboard from './views/Dashboard/Dashboard';
import Jobs from './views/Jobs/Jobs';
import Profile from './views/Profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Home />
          <Switch>
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/jobs" render={(props) => <Jobs {...props} />} />
            <Route exact path="/profile" render={(props) => <Profile {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;