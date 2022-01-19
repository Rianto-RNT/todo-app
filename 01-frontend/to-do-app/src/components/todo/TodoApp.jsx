import React, { Component } from 'react';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <LoginComponent></LoginComponent>
      </div>
    );
  }
}

// login component class
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'RNT-todo',
      password: ''
    };
    // this.handlerUsernameChange = this.handlerUsernameChange.bind(this);
    // this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(this.state);
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

  render() {
    return (
      <div>
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <button>Login</button>
      </div>
    );
  }
}

export default TodoApp;
