import axios from 'axios'
import { Message } from 'element-ui'

const http = axios.create({
    baseURL: process.env.HOST_API,
    withCredentials: true,
    timeout: 50000
})
const codeMessage = {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
console.log(process.env.BASE_URL)
console.log(process.env.HOST_API)
http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
        const data = response;
        console.log(response, 'response----')
        return data.data;
    },
    error => {
        console.log(error.response, 'aaaaaaaaaaaaaaaaaa')
        const response = error.response;
        let errorText = "网络错误";
        if (response) {
            if (response.data.message) {
                errorText = response.data.message
            } else {
                errorText = codeMessage[response.status] || response.statusText;
            }
            if (response.status) {
                switch (response.status) {
                    case 401:
                        router.push("/login");
                        break;
                    case 403:
                        router.push("/login");
                        break;
                }
            }
            // Message({
            //     message: errorText,
            //     type: 'error',
            //     duration: 5 * 1000
            // })
            Message.error({
                message: errorText,
                // type: 'error',
                // duration: 5 * 1000
            })
        } else {
            Message.error({
                message: errorText,
                // type: 'error',
                // duration: 5 * 1000
            })
        }
        return Promise.reject(error)
    }
)


export default http