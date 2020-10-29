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
  }
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
  next()
})

router.afterEach(() => {
  NProgress.done() //进度条结束
})

export default router
