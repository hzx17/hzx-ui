import {createWebHashHistory,createRouter} from 'vue-router'

// 引入路由配置
import routerpages from './routerPages.js'
const router = createRouter({
  history:createWebHashHistory(),
  routes:[...routerpages]
})

export default router