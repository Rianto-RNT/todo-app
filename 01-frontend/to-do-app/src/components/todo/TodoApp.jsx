import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/todos" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent></FooterComponent>
          </>
        </Router>
        {/* <LoginComponent></LoginComponent>
        <WelcomeComponent></WelcomeComponent> */}
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        Header <hr/>
      </div>
    )
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        Footer 
      </div>
    )
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
        { id: 2, description: 'Become an expert in react', done: false, targetDate: new Date() },
        { id: 2, description: 'Visit Lenangguar, Sumbawa, West Nusa Tenggara', done: false, targetDate: new Date() },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1> List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Target Date</th>
              <th>Is Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome, {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occurred. I don't know what to do! please contact support at rianto.rnt@gmail.com</div>;
}

// login component class
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
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
        Password:
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
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
