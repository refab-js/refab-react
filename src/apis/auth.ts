
import fetchAPI from './'
import urls from '../constants/apis/auth/urls'

interface LoginData {
    username: string,
    password: string,
}

interface RegisterData {
    username: string,
    email: string,
    password: string,
}

export const loginAPI = (data: LoginData) => {
    return fetchAPI.post(urls.loginAPI, data, { version: 1 })
}

export const registerAPI = (data: RegisterData) => {
    return fetchAPI.post(urls.registerAPI, data, { version: 1 })
}