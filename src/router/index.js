import Vue from 'vue'
import VueRouter from 'vue-router'
const MenuManage = () => import('@/views/SystemSettings/MenuManage')
const AdminManage = () => import('@/views/SystemSettings/AdminManage')
Vue.use(VueRouter)

const routes = [
  {
    path: '/menuManage',
    name: 'MenuManage',
    component: MenuManage,
  },
  {
    path: '/adminManage',
    name: 'AdminManage',
    component: AdminManage,
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
