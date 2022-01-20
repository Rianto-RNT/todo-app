import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome" component={WelcomeComponent} />
          </>
        </Router>
        {/* <LoginComponent></LoginComponent>
        <WelcomeComponent></WelcomeComponent> */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome to RNT to App</div>;
  }
}

// login component class
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'RNT-todo',
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
    if (this.state.username === 'RNT-todo' && this.state.password === 'dummy') {
      this.props.history.push("/welcome")
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
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
        Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  }
  return null;
}

function ShowLoginSuccessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Successful</div>;
  }
  return null;
}

export default TodoApp;
