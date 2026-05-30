import { createStore } from 'vuex'
import contador from './modules/contador'
import sesion from './modules/sesion'
import posts from './modules/posts'

const store = createStore({
  modules: {
    contador,
    sesion,
    posts,
  },
  // Solo activo en modo desarrollo
  strict: import.meta.env.DEV,
})

export default store
