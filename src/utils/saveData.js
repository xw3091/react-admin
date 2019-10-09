import { postFetch } from '../axios'
import { setToken, setData } from '../utils'

export function saveLogin(url, params) {
    // 异步请求, 获取promise值
    const result = async () => {
        let resultData = await postFetch(url, params)
        // console.log(resultData)
        // 存储用户信息
        setData('userId', resultData.userId)
        setData('roleId', resultData.roleId)
        setToken(resultData.token)
    }
    result()
}