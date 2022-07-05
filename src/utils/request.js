import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})


service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {

      config.headers['authorization'] = store.getters.token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// // response interceptor
service.interceptors.response.use(

  response => {
    const res = response.data
    const code = res.code
    // if the custom code is not 20000, it is judged as an error.

    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code == 503 || res.code == 504) {
      // to re-login
      MessageBox.confirm('你的登录已经到期了，请重新登录', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.commit('user/UPDATE_STORE_INFO', {}),
        store.commit("user/GET_TOKEN", "");
        location.reload();
      })
    } else {
      return response
    }

  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
