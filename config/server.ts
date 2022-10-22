import axios from 'axios';
let baseUrl:string = ""
if(process.env.NODE_ENV == "development"){
    baseUrl = "http://development.com"
}else if(process.env.NODE_ENV == "production"){
    baseUrl = "http://production.com"
}
console.log(baseUrl)
const server = axios.create({
    baseURL: baseUrl,
    timeout: 10000
})
server.interceptors.request.use(config => {
    console.log("请求拦截");
    return config;
})
server.interceptors.response.use(response => {
    console.log("响应拦截");
    return response.data;
})
export default server;