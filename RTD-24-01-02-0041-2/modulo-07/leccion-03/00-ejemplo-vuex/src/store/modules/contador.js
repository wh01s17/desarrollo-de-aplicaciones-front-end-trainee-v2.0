export default {
  namespaced: true,

  state: () => ({
    valor: 0,
  }),

  getters: {
    doble: (state) => state.valor * 2,
  },

  mutations: {
    incrementar(state) {
      state.valor++
    },
    decrementar(state) {
      state.valor--
    },
    reiniciar(state) {
      state.valor = 0
    },
  },
}
