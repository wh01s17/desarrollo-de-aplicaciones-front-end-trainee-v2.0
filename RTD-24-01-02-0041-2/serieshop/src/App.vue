<script setup>
import { onMounted, ref } from 'vue'
import MyCarousel from './components/MyCarousel.vue'
import MyFooter from './components/MyFooter.vue'
import NavBar from './components/NavBar.vue'

const series = ref([])
const filter = ref('')
const error = ref(null)
const loading = ref(false)

const obtenerDatos = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=dragon`)

    if (!response.ok) throw new Error('No se pudo conectar a la API')

    const data = await response.json()

    series.value = data.map(({ show }) => {
      return {
        id: show.id,
        titulo: show.name,
        descripcion: show.summary,
        imagen: show.image?.original ?? show.image?.medium,
        precio: Math.floor((show.rating.average ?? 5) * 3000),
        categoria: show.genres?.[0] ?? 'Serie',
        rating: show.rating.average ?? 'Sin rating',
      }
    })
  } catch (err) {
    error.value = err.message
    console.error(error.value)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await obtenerDatos()
})
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- <NavBar /> -->
    <MyCarousel />

    <main class="container py-5 flex-grow-1">
      <section>
        <input
          type="text"
          v-model.lazy="filter"
          class="form-control mb-5"
          placeholder="Busca tu serie favorita..."
        />
      </section>

      <section></section>
    </main>

    <MyFooter />
  </div>
</template>

<style scoped></style>
