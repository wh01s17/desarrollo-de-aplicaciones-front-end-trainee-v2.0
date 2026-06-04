import { defineStore } from 'pinia'

export const useSesionStore = defineStore('sesion', {
  state: () => ({
    logueado: false,
  }),

  getters: {
    estaLogueado: (state) => state.logueado,
  },

  actions: {
    entrar() {
      this.logueado = true
    },
    salir() {
      this.logueado = false
    },
  },
})
