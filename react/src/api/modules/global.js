import service from '../service'
// import { stringify } from 'qs'
import { baseUrl } from '../config'
const tempUrl = 'http://localhost:8086/apis'

export default {
    //校验RequestCode
    checkRequestCode (data) {
        return service.post(
            `${baseUrl}/isz-program/boatLicense/checkRequestCode`, data
        )
    },
    // 获取initCode及用户信息
    getInitCode () {
        return service.post(
            `${baseUrl}/isz-program/boatLicense/getInitCode`
        )
    },
    // 初始化JSSDK、调用用户授权以获取用户信息
    getUserInfo (data) {
        return service.post(
            `${baseUrl}/isz-program/boatLicense/getUserInfo`, data
        )
    },
    // 提交表单
    boatLicenseSubmit (data) {
        return service.post(`${baseUrl}/isz-program/boatLicense/submit`, data)
    },
    testSubmit (data) {
        return service.post1(`${tempUrl}/isz-program/boatLicense/submit`, data)
    }




}
