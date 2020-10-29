/**
 * 通用的请求axios  --- 工具函数层
 */


// 引入库
import axios from 'axios'
import qs from 'qs'
import router from '../router'
// 引入本地存储工具函数
import local from "@/utils/local";


// 按需引入组件
import { Message } from 'element-ui'

// 设置默认请求的接口地址
axios.defaults.baseURL = 'http://123.56.163.99:8000'
axios.defaults.withCredentials = true;

// axios.defaults.baseURL = 'http://www.txsq.com'
// axios.defaults.withCredentials = true
// 请求拦截器
axios.interceptors.request.use(config => {
  // 在请求发送出去之前 带上一些东西 config是请求的配置对象， 如果直接返回 就等于什么都不带
  // 所有的axios请求，在请求发送出去之前 带上token
  let val = JSON.parse(window.sessionStorage.getItem('tokeness'));

  config.headers.Authorization = 'token ' + val
  // config.headers.Authorization = 'Bearer '
  // config.headers.Authorization = "Access-Control-Allow-Headers"

  return config;
}, error => {
  return Promise.reject(error); // 请求错误处理
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // response就是后端响应回来的东西 如果你想做什么统一的处理 可以在这里写

  let data = response.data;
  // 成功
  if (data.message === "无效token") {
    window.localStorage.clear()
    window.sessionStorage.clear()
    this.$message({
      message: "登录失效",
      type: 'warning'
    });
    router.push('/login')
  }
  if (data.message === "token失效") {
    window.localStorage.clear()
    window.sessionStorage.clear()
    router.push('/login')
    this.$message({
      message: "登录失效",
      type: 'warning'
    });
  }
  // if (data.code === 200) {
  //   router.push('/login')
  // }
  //   Message({
  //     type: 'success',
  //     message: msg
  //   })
  // } else if (code === 1) {
  //   // 失败
  //   Message.error(msg)
  // }
  // console.log(response.headers, "11111111111111");

  return response;

}, error => {
  // Message.error("网络请求发生错误，请稍后再试")
  return Promise.reject(error); // 响应错误处理
});


// 导出两个方法
export default {
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
