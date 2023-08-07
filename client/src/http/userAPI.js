import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const response = await $host.post(`${process.env.REACT_APP_HTTP_URL_API}user/registration`, {email, password, role: 'USER'})
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const login = async (email, password) => {
    const response = await $host.post(`${process.env.REACT_APP_HTTP_URL_API}user/login`, {email, password})
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const logout = async () => {
    await $host.post(`${process.env.REACT_APP_HTTP_URL_API}user/logout`)
    localStorage.removeItem('accessToken')
}

// export const accountInfoUpdate = async () => {
//     const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/accountinfoupdate`)
//     localStorage.setItem('accessToken', response.data.accessToken)
//     return jwt_decode(response.data.accessToken)
// }

export const checkAuth = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/checkauth`)
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const checkVisit = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/checkvisit`)
    localStorage.setItem('accessToken', response.data.accessToken)
}

export const subsMonth = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/subsmonth`)
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const subsThreeMonth = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/substhreemonth`)
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const subsHalfYear = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/subshalfyear`)
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const subsYear = async () => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/subsyear`)
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const submitSurvey = async (selectСurrency) => {
    const response = await $authHost.post(`${process.env.REACT_APP_HTTP_URL_API}user/survey`, {selectСurrency})
    localStorage.setItem('accessToken', response.data.accessToken)
    return jwt_decode(response.data.accessToken)
}

export const submitEmailInstruction = async (email) => {
    const response = await $host.post(`${process.env.REACT_APP_HTTP_URL_API}user/submitemailinstruction`, {email})
    return response.data.resolution
}

export const updatePassword = async (password, link) => {
    const response = await $host.post(`${process.env.REACT_APP_HTTP_URL_API}user/updatepassword`, {password, link})
    return response.data.resolution
}