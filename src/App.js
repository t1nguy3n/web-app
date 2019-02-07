// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './views/Home';
import Login from './views/Login';

function onAuthRequired({ history }) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-456973.oktapreview.com/oauth2/default'
          client_id='0oaj96clonR2R855g0h7'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <Route path='/' exact={true} component={Home} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-456973.oktapreview.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;