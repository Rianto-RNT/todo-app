import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        // console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world')
    }
    executeHelloWorldBeanService() {
        // console.log('Execute service')
        return axios.get('http://localhost:8080/hello-world-bean')
    }
    executeHelloWorldPathVariableService(name) {
        // console.log('Execute service')
        let username = 'rian'
        let password = 'test123'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            {
                headers: {
                    // authorization: basicAuthHeader
                }
            }
        )
    }

}

export default new HelloWorldService()