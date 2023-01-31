import Request from '@/modules/axios'

const axiosRequest = new Request(
  {
    // axios基础配置
    url: import.meta.env.VITE_BASE_URL,
    timeout: 60000,
  },
  {
    // axios 自定义配置
    responseHandler: ({ data }) => {
      // 显示错误
      if (!data.success) {
        ElMessage({ type: 'error', message: data.message, grouping: true })
      }
      return data
    },
    responseErrorHandler: (err) => {
      // 显示错误
      ElMessage({ type: 'error', message: err.message, grouping: true })
      return Promise.reject(err)
    },
  },
)

export const request = axiosRequest.request.bind(axiosRequest)
