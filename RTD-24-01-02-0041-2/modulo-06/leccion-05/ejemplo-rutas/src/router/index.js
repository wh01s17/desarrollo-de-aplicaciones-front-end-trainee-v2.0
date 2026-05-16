import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import SingleMovieView from '@/views/SingleMovieView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
      alias: '/acerca-de',
    },
    {
      path: '/movies',
      component: MoviesView,
    },
    {
      path: '/movies/:id',
      component: SingleMovieView,
      props: true,
    },
    {
      path: '/home',
      redirect: '/',
    },
  ],
})

export default router
