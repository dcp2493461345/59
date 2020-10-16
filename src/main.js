import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css' // reset.css
import './assets/css/common.css' // common.css
import axios from 'axios'
// Vue.prototype.$axios = axios
// axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;
Vue.use(ElementUI);
// 引入本地存储工具函数
import local from "@/utils/local";


// 路由守卫（拦截所有路由 进入所有路由之前 必须先走路由守卫）
router.beforeEach((to, from, next) => {
  // 从本地存储获取token
  let token = JSON.parse(window.sessionStorage.getItem('tokeness'));

  // if (token) { // 如果token存在，证明是登录成功进来的
  //   next() // 放行
  // } else { // 如果token不存在，证明没有登录，翻墙进来的
  //   // 如果要去的是登录  直接放行
  //   if (to.path === '/login') {
  //     next()
  //   } else if (to.path === "/personal") { // 否则要去其他地址，直接跳转到登录界面
  //     next('/login')
  //   }
  // }
  if (to.path === "/personal") {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
