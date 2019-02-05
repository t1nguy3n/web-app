import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Login extends Component {
  componentDidMount() {
    axios.get("/ping")
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <div className="login-title">
          SITE NAME HERE
        </div>
        <div className="Login">
          <input className="login-item" type={"textbox"} placeholder={"Username"}></input>
          <input className="login-item" type={"textbox"} placeholder={"Password"}></input>
          <button className="login-button">SIGN IN</button>
        </div>
      </div>
    );
  }
}

export default Login;
