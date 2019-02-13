import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
// import Login from './views/Login';
import Home from './views/Home';
import Page1 from './views/Page1';
import Jobs from './views/Jobs/Jobs';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Home />
          <Switch>
            <Route exact path="/" render={(props) => <Page1 {...props} />} />
            <Route exact path="/jobs" render={(props) => <Jobs {...props} />} />
            <Route exact path="/page2" render={(props) => <Page2 {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;