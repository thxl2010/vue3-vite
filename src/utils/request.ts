import axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 统一处理接口响应错误，比如 token 过期无效/服务端异常等
    if (response.data.status && response.data.status !== 200) {
      ElMessage.error(response.data.msg || '请求失败，请稍后重试');
      return Promise.reject(response.data);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// request 不支持泛型
// request.get / post/ put 支持相应数据泛型
// 由于后端包装一层数据 data ，导致访问数据比较麻烦，所以封装了 request
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then((res) => (res.data.data || res.data) as T);
};
