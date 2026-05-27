<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const colors = ref([])
const loading = ref(false)
const error = ref(null)

const API_KEY = 'free_user_3EEUV19Zs7kb4yLFOQT1v6QoUrY'

const fetchColors = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await axios.get('https://reqres.in/api/unknown', {
      params: { page: 1 },
      headers: { 'x-api-key': API_KEY },
    })

    colors.value = response.data.data
  } catch (err) {
    if (err.response) {
      error.value = `El servidor falló: ${err.response.status}`
    } else if (err.request) {
      error.value = 'No hubo respuesta del servidor (error de red)'
    } else {
      error.value = 'Error al construir la petición'
    }
  } finally {
    loading.value = false
  }
}

onMounted(fetchColors)
</script>

<template>
  <section class="container py-4 app">
    <h2>Catalogo Color</h2>

    <!-- Loading -->
    <div v-if="loading" class="alert alert-info">⏳️ Cargando colores...</div>

    <!-- Error -->
    <div v-else-if="error" class="alert alert-danger">🔴 {{ error }}</div>

    <!-- Contenido -->
    <ul v-else class="list-group">
      <li
        v-for="color in colors"
        :key="color.id"
        class="list-group-item d-flex align-items-center gap-3"
      >
        <span class="rounded-circle border circle" :style="{ backgroundColor: color.color }"></span>
        <b class="text-capitalize">{{ color.name }}</b>
        <span class="text-muted small ms-auto">{{ color.year }} / {{ color.pantone_value }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.app {
  max-width: 640px;
}

.circle {
  width: 24px;
  height: 24px;
}
</style>
