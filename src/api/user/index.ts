//统一管理咱们项目用户相关的接口

import request from '@/utils/request'

import type {
  loginFormData,
  loginResponseData,
} from './type'

//项目用户相关的请求地址

enum API {
  LOGIN_URL = '/backend/sso/login',
}
//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

