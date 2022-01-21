class AuthService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authUser', username);
    }
    logout() {
        sessionStorage.removeItem('authUser');
    }
}

export default new AuthService()