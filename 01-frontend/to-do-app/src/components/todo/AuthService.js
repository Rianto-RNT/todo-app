class AuthService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authUser', username);
    }
    logout() {
        sessionStorage.removeItem('authUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authUser')
        if (user === null) return false
        return true
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem('authUser')
        if (user === null) return ''
        return user
    }
}

export default new AuthService()