import axios from 'axios';

class AuthService {
  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);

    console.log('registerSuccessfulLogin');
    sessionStorage.setItem('authUser', username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('authUser');
    if (user === null) return '';
    return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthService();
