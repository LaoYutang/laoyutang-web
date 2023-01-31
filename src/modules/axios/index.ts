import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type {
  RequestMethodType,
  RequestConfigType,
  RequestMapType,
  CustomConfigType,
} from './index.d'

class Request {
  // 构造函数创建axios实例
  instance: AxiosInstance
  requestMap: RequestMapType
  customConfig: CustomConfigType | undefined
  constructor(config: AxiosRequestConfig, customConfig?: CustomConfigType) {
    this.instance = axios.create(config)
    this.requestMap = new Map()
    this.customConfig = customConfig
    // 使用axios拦截器
    this.instance.interceptors.request.use(
      customConfig?.requestHandler,
      (err) => Promise.reject(err),
    )
    this.instance.interceptors.response.use(
      customConfig?.responseHandler,
      customConfig?.responseErrorHandler,
    )
  }

  // 请求方法
  request(
    url: string,
    params: any,
    method: RequestMethodType,
    config?: RequestConfigType,
  ) {
    // 收到请求先判断请求是否正在进行或者仍然有效
    const requestKey = url + method + JSON.stringify(params)
    // 防抖，存在相同请求则返回同一个promise对象，结束方法
    if (this.requestMap.has(requestKey)) return this.requestMap.get(requestKey)

    // methos支持json方式或者formdata
    // 格式 'post/formdata'为formdata 否则为json
    const [realMethod, format] = method.split('/')
    const contentType =
      format === 'formdata'
        ? 'application/x-www-form-urlencoded'
        : 'application/json'

    // 请求参数
    const requestConfig: AxiosRequestConfig = {
      ...config?.merge, // 覆盖默认请求配置
      url,
      method: realMethod,
      // 若为get请求放到params中，否则放到data
      params: realMethod === 'get' ? params : {},
      data: realMethod === 'get' ? {} : params,
      headers: Object.assign({}, config?.merge?.headers, {
        'content-type': contentType,
      }),
    }

    // 请求并存储
    const requestPromise = this.instance.request(requestConfig)
    this.requestMap.set(requestKey, requestPromise)

    // 请求结束有效期, 默认500ms
    requestPromise.finally(() => {
      setTimeout(() => {
        this.requestMap.delete(requestKey)
      }, this.customConfig?.expire ?? 500)
    })

    return requestPromise
  }
}

export default Request
