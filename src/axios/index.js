import axios from 'axios'
import qs from 'qs'
import { HashRouter } from 'react-router-dom'
import { message } from 'antd'
import { getToken, removeToken } from '../utils'

// 状态码
let errorCode = {
    401: 'sessionid失效',
    403: '拒绝访问',
    404: '请求错误,未找到该资源',
    500: '服务器端出错'
}

// message配置
message.config({
    top: 50,
    duration: 1,
    maxCount: 1
})

// rap2模拟接口
const baseURL = 'http://rap2api.taobao.org/app/mock/225341/react_admin/'

// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        let pathname = window.location.pathname
        if (getToken()) {
            if (pathname !== '/' && pathname !== '/login') {
                config.headers.common['token'] = getToken()
            }
        }
        return config
    }, (error) => {
        // 响应失败
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response.data
    }, (error) => {
        // 响应失败
        if (error && error.response) {
            const router = new HashRouter()
            if (errorCode[error.response.status]) {
                if (error.response.status === 401 || error.response.status === 404) {
                    removeToken()
                    return router.history.push('/app/login')
                }
                if (error.response.status === 403) return router.history.push('/404')
                message.error(errorCode[error.response.status])
            } else {
                message.error('连接错误: 状态码: ' + error.response.status)
            }
        }
        return Promise.reject(error)
    }
)

// 封装axios
function apiAxios(method, url, params) {
    // 请求参数
    let httpDefault = {
        baseURL: baseURL,
        method: method,
        url: url,
        params: method === 'GET' ? params : null,
        data: method === 'POST' ? qs.stringify(params) : null,
        timeout: 5000
    }
    // console.log('请求参数', httpDefault)
    // 处理请求
    const result = new Promise((resolve, reject) => {
        axios(httpDefault)
            .then(res => {
                // console.log('返回参数', res)
                // JSON.stringify(),将json对象转为json字符串存储, JSON.parse()相反
                // 判断返回数据是否正确
                if (res.isOk === false)
                    message.error('请求失败, 请联系管理员')
                else
                    resolve(res)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.data.errMsg)
                } else {
                    reject(error)
                }
            })
    })
    return result
}

export function getFetch(url, params) {
    return apiAxios('GET', url, params)
}

export function postFetch(url, params) {
    return apiAxios('POST', url, params)
}