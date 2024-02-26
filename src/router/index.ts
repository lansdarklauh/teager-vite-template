import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ElementPlus from '../views/ElementPlusView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ElementPlus,
    },
    {
      path: '/Mobile',
      name: 'mobile',
      // 有利于懒加载
      component: () => import('../views/Vant4View.vue'),
    },
  ],
})

export default router
