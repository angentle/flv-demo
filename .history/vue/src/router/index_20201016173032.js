import Vue from 'vue'
import VueRouter from 'vue-router'
import Video from '../views/video/video'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Video',
    meta: { title: '直播拉流' },
    component: Video
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history', // 默认时hash 但是路径会有# 
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title === undefined ? '' : to.meta.title
  if (to.path !== from.path) {
    NProgress.start() //进度条加载
  }

  // 处理keepAlive页面缓存的 副作用
  // let toDepth = to.path.split('/').length
  // let fromDepth = from.path.split('/').length

  // if (toDepth < fromDepth) {
  //   // console.log('back...')
  //   from.meta.keepAlive = false
  //   to.meta.keepAlive = true
  // }

  next()
})

router.afterEach(() => {
  NProgress.done() //进度条结束
})

export default router
