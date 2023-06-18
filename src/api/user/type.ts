// 用户登录接口携带参数的ts类型
export interface loginFormData {
  name: string
  password: string
}

// 定义全部接口返回数据都拥有的ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface permissionsData {
  "id"?: number,
  "name"?: string,
  "path"?: string,
  "createdAt"?: string,
  "updatedAt"?: string,
  "deletedAt"?: string
}

// 定义登录接口返回的数据类型
export interface loginResponseData extends ResponseData {
  data: {
    type:string,
    token:string,
    expire_in:string,
    is_admin:number,
    role_ids:string[],
    permissions:permissionsData[]
  }
}

// 定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
