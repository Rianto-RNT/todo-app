import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
        // console.log('Execute service')
    }
    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        // console.log('Execute service')
    }

}

export default new HelloWorldService()