import Cookies from 'js-cookie'
import { saveLogin } from './saveData'

const TokenKey = 'Admin-Token'

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function getToken() {
    return Cookies.get(TokenKey)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function setData(name, data) {
    return Cookies.set(name, data)
}

export function getData(name) {
    return Cookies.get(name)
}

export function removeData(name) {
    return Cookies.remove(name)
}
export { saveLogin }