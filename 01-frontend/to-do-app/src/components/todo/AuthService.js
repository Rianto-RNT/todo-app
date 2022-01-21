class AuthService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authUser', username);
    }
}

export default new AuthService()