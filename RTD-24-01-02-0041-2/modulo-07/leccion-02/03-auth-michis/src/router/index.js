import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import MichisView from '@/views/MichisView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/register',
    component: RegisterView,
  },
  {
    path: '/michis',
    component: MichisView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser()

    if (!user) return '/login'
  }
})

export default router
