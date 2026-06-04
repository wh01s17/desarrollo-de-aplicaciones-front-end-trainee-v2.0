import { useSesionStore } from '@/stores/sesionStore'
import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'inicio',
    },
    {
      path: '/posts',
      component: PostsView,
      name: 'posts',
      meta: {
        requiereSesion: true,
      },
    },
  ],
})

router.beforeEach((to) => {
  const sesion = useSesionStore()

  if (to.meta.requiereSesion && !sesion.estaLogueado) {
    return '/'
  }
})

export default router
