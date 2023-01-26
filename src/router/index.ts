import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
    },
    component: () => import('@/views/test-page.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
