import DetalleProductoView from '@/views/DetalleProductoView.vue'
import InicioView from '@/views/InicioView.vue'
import ProductosView from '@/views/ProductosView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: InicioView,
    },
    {
      path: '/productos',
      component: ProductosView,
    },
    {
      path: '/productos/:id',
      component: DetalleProductoView,
      props: true,
    },
  ],
})

export default router
