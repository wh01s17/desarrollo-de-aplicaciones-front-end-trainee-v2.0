export default {
  namespaced: true,

  state: () => ({
    logueado: false,
  }),

  getters: {
    estaLogueado: (state) => state.logueado,
  },

  mutations: {
    login(state) {
      state.logueado = true
    },
    logout(state) {
      state.logueado = false
    },
  },
}
