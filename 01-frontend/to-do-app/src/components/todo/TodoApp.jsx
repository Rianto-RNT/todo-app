import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import LoginComponent from './LoginComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoComponent from './TodoComponent';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent></HeaderComponent>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <AuthRoute path="/welcome/:name" component={WelcomeComponent} />
              <AuthRoute path="/todos/:id" component={TodoComponent} />
              <AuthRoute path="/todos" component={ListTodosComponent} />
              <AuthRoute path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent></FooterComponent>
          </>
        </Router>
      </div>
    );
  }
}

export default TodoApp;
