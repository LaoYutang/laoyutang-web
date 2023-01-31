import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

// 请求方式类型
export type RequestMethodType =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'post/formdata'
  | 'put/formdata'
  | 'delete/formdata'

// 请求配置类型
export interface RequestConfigType {
  trimString?: boolean
  merge?: AxiosRequestConfig
}

// 请求存储字典类型
export type RequestMapType = Map<string, Promise<any>>

// 封装类自定义配置类型
export interface CustomConfigType {
  responseHandler?: (response: AxiosResponse) => any // 响应体处理拦截
  responseErrorHandler?: (error: any) => Promise<any> // 响应体错误处理拦截
  requestHandler?: (
    response: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig // 请求体处理拦截
  expire?: number // 有效期
}
