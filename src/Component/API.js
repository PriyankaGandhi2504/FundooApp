import axios from 'axios'

export default axios.create({
    baseURL : 'https://reactnative-b924a.firebaseio.com/',
    responseType : "json"
})