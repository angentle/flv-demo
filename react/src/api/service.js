/* eslint-disable*/
import axios from 'axios'

const tempUrl = 'http://localhost:8086/apis'
axios.defaults.timeout = 100000

axios.interceptors.request.use(
    config => {
        return config
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(

    response => {
        if (response.status === 200) {
            let msg = ''

            switch (response.data.code) {
                case 500:
                    // msg = '操作失败'
                    break
                case 0:
                    // msg = '没有查询到数据'
                    break
                case 500:
                    msg = '服务器异常'
                    break
                case 200:
                    //操作成功
                    break
                case 401:
                    msg = 'token过期'
                    break
                case 403:
                    msg = '权限不足'
                    break
                case 404:
                    msg = '参数检验失败'
                default:
            }
            return response.data
        } else {
            return {
                code: 500,
                msg: '服务器异常'
            }
        }
    },
    error => {
        return {
            code: 500,
            msg: '服务器异常'
        }
    }
)

const baseAxiosTimeout = 2000
const baseAxios = axios.create({
    baseURL: tempUrl,
    timeout: baseAxiosTimeout,
    headers: { 'X-Custom-Header': 'angentle-koa-server' }
})

baseAxios.interceptors.response.use(

    response => {
        console.log('response', response)
        if (response.status === 200) {
            let msg = ''

            switch (response.data.code) {
                case 500:
                    // msg = '操作失败'
                    break
                case 0:
                    // msg = '没有查询到数据'
                    break
                case 500:
                    msg = '服务器异常'
                    break
                case 200:
                    //操作成功
                    break
                case 401:
                    msg = 'token过期'
                    break
                case 403:
                    msg = '权限不足'
                    break
                case 404:
                    msg = '参数检验失败'
                default:
            }
            return response.data
        } else {
            return {
                code: 500,
                msg: '服务器异常'
            }
        }
    },
    error => {
        if (error.message === `timeout of ${baseAxiosTimeout}ms exceeded`) {
            console.log('请求超时')
        }

        return {
            code: 500,
            msg: '服务器异常'
        }
    }
)

export default {
    get (url, params = {}, headers = {}, loading = true) {
        return axios.get(url, {
            params,
            headers,
            loading
        })
    },
    post (url, params = {}, headers = {}, loading = true) {
        return axios.post(url, params, headers, loading)
    },
    get1 (url, params = {}, headers = {}, loading = true) {
        return baseAxios.get(url, {
            params,
            headers,
            loading
        })
    },
    post1 (url, params = {}, headers = {}, loading = true) {
        return baseAxios.post(url, params, headers, loading)
    }
}
