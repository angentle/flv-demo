import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './storage/storage'
import VueLazyLoad from 'vue-lazyload'

// vant 按需加载
import './utils/vantImport'
import 'lib-flexible/flexible' // px2rem适配
import './rem'
// import './mock' // 打包时去掉

//引入iconfont
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

// 图片懒加载
Vue.use(VueLazyLoad, {
  // error: './static/error.png',
  preLoad: 1.4,
  attempt: 1,
  error: '',
  listenEvents: ['scroll'],
  // loading: './static/loading.png'
})

// 已经封装过的localStorage
Vue.prototype.ls = window.ls = new storage()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
