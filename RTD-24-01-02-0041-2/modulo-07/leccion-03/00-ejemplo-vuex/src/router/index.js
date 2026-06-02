import store from '@/store'
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

// Guard global
router.beforeEach((to) => {
  const logueado = store.getters['sesion/estaLogueado']

  if (to.meta.requiereSesion && !logueado) {
    return '/'
  }
})

export default router
