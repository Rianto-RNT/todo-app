import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';

class HeaderComponent extends Component {
    render() {
      const isUserLoggedIn = AuthService.isUserLoggedIn();
      // console.log(isUserLoggedIn)
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="http://www.rnt-creative.io" className="navbar-brand">
                RNT-Todo-App
              </a>
            </div>
  
            <ul className="navbar-nav">
              {
              isUserLoggedIn && 
                <li>
                  <Link className="nav-link" to="/welcome">
                    Home
                  </Link>
                </li>
              }
  
              {isUserLoggedIn && 
                <li>
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              }
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && 
                <li>
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
              }
  
              {isUserLoggedIn && 
                <li>
                  <Link className="nav-link" to="/logout" onClick={AuthService.logout}>
                    Logout
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </header>
      );
    }
  }

  export default HeaderComponent;