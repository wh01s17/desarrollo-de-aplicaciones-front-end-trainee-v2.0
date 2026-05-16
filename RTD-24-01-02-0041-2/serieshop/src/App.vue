<script setup>
import { watch, ref } from 'vue'
import MyCarousel from './components/MyCarousel.vue'
import MyFooter from './components/MyFooter.vue'
import NavBar from './components/NavBar.vue'
import loaderSvg from './assets/img/loader.svg'
import CardItem from './components/CardItem.vue'

const series = ref([])
const filter = ref('')
const error = ref(null)
const loading = ref(false)

const obtenerDatos = async () => {
  if (!filter.value) {
    series.value = []
    return
  }

  loading.value = true
  error.value = null

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${filter.value}`)

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
  } finally {
    loading.value = false
  }
}

watch(filter, async () => {
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

      <section>
        <!-- Loading -->
        <div v-if="loading" class="alert alert-secondary text-center p-5">
          <h4 class="mb-5">Cargando series</h4>

          <img :src="loaderSvg" alt="cargando" class="loader" />
        </div>

        <!-- Errores -->
        <div v-else-if="error" class="alert alert-danger text-center">
          <i class="fa-solid fa-circle-xmark"></i>
          {{ error }}
        </div>

        <!-- Contenido -->
        <div v-else>
          <!-- Informativo -->
          <div v-if="!filter" class="alert alert-secondary text-center p-5">
            <i class="fa-solid fa-magnifying-glass fa-3x mb-3 text-body-tertiary"></i>
            <h3 class="mb-2">Comienza tu busqueda</h3>
            <p class="mb-0">
              Escribe el nombre de una serie en el campo de arriba para ver los resultados.
            </p>
          </div>

          <!-- sin resultados -->
          <div v-else-if="series.length === 0" class="alert alert-secondary text-center p-5">
            <i class="fa-solid fa-xmark fa-3x mb-3 text-body-tertiary"></i>
            <h3 class="mb-2">Sin resultados</h3>
            <p class="mb-0">No se encontró la serie ingresada</p>
          </div>

          <!-- resultados -->
          <ul v-else class="row g-3 list-unstyled">
            <CardItem v-for="serie in series" :key="serie.id" :data="serie">{{ serie }}</CardItem>
          </ul>
        </div>
      </section>
    </main>

    <MyFooter />
  </div>
</template>

<style scoped>
.loader {
  height: 150px;
}
</style>
