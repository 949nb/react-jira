// 在真实环境中，如果食用firebase种种第三方auth服务的话，本文件不需要我开发

import { User } from './screens/project-list/search-panel'

const localStorageKey = '__auth_provider_token__'
const ApiUrl = process.env.REACT_APP_API_URL;

export const handleUserResponse = ({user}: {user: User}) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: {username: string, password: string}) => {
    return fetch(`${ApiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (res) => {
            if (res.ok) {
                return handleUserResponse(await res.json())
            } else {
                return Promise.reject(data)
            }
        }
    )
}

export const register = (data: {username: string, password: string}) => {
    return fetch(`${ApiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (res) => {
            if (res.ok) {
                return handleUserResponse(await res.json())
            }else {
                return Promise.reject()
            }
        }
    )
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)