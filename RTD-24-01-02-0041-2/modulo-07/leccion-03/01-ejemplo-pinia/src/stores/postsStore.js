import { api } from '@/api/api'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  actions: {
    async cargar() {
      this.loading = true
      this.error = null

      try {
        const { data } = await api.get('/posts')
        this.items = data.slice(0, 5)
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})
