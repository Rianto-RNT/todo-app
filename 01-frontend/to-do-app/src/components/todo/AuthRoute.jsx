import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthService from './AuthService';

class AuthRoute extends Component {
  render() {
    if (AuthService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthRoute;
