import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './views/Home';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
// import Login from './views/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
          <Switch>
            <Route exact path="/" render={(props) => <Page1 {...props} />} />
            <Route exact path="/page1" render={(props) => <Page1 {...props} />} />
            <Route exact path="/page2" render={(props) => <Page2 {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;