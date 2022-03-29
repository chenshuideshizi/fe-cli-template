import {createRouter, createWebHistory} from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: import('@/views/Home') 
  },
  { 
    path: '/about', 
    component: import('@/views/About')  
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router


