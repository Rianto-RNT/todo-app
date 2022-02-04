import React, { Component } from 'react';
import AuthService from './AuthService';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'rian',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {

    AuthService.executeBasicAuthService(this.state.username, this.state.password)
      .then(() => {
        AuthService.registerSuccessfulLogin(this.state.username, this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div>Login Successful</div>}
          User Name:{' '}
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
