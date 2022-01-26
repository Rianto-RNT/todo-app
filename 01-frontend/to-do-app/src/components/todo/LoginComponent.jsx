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
      // this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
      // this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
  
    handleChange(event) {
      // console.log(this.state);
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    // handlerUsernameChange(event) {
    //   console.log(event.target.name);
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //   });
    // }
  
    // handlerPasswordChange(event) {
    //   console.log(event.target.value);
    //   this.setState({
    //     password: event.target.value,
    //   });
    // }
  
    loginClicked() {
      // RNT-todo, dummy
      if (this.state.username === 'rian' && this.state.password === 'dummy') {
        AuthService.registerSuccessfulLogin(this.state.username, this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`);
        // this.setState({ showSuccessMessage: true });
        // this.setState({ hasLoginFailed: false });
      } else {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      }
  
      // console.log(this.state);
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container">
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
            {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
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

  export default LoginComponent