import { api } from '@/api/api.js'

export default {
  namespaced: true,

  state: () => ({
    items: [],
    loading: true,
    error: null,
  }),

  mutations: {
    setItems(state, items) {
      state.items = items
    },

    setLoading(state, value) {
      state.loading = value
    },

    setError(state, mensaje) {
      state.error = mensaje
    },
  },

  actions: {
    async cargar({ commit }) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const { data } = await api.get('/posts')
        commit('setItems', data.slice(0, 5))
      } catch (error) {
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    },
  },
}
