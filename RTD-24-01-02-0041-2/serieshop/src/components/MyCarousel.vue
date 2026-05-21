<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { animate, stagger } from 'animejs'

const slides = ref([])
const currentIndex = ref(0)
const loading = ref(true)
const error = ref(null)
const currentSlide = computed(() => slides.value[currentIndex.value])

let autoplayTimer = null
const AUTOPLAY_MS = 6000

// Array que contiene los IDs de las series destacadas
const seriesDestacadas = [169, 82, 2993, 73, 530, 1505]

const obtenerDestacados = async () => {
  try {
    const responses = await Promise.all(
      seriesDestacadas.map(async (id) => {
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`)

        if (!res.ok) throw new Error('No se pudo cargar la serie destacada')

        return res.json()
      }),
    )

    slides.value = responses.map((show) => {
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

const animarDiapositiva = () => {
  animate('.hero-carousel__bg', {
    opacity: [0, 1],
    scale: [1.15, 1],
    duration: 1200,
    ease: 'outQuad',
  })

  animate('.hero-carousel__content > *', {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 700,
    delay: stagger(120, { start: 150 }),
    ease: 'outQuad',
  })
}

const irA = async (index) => {
  if (index === currentIndex.value || slides.value.length === 0) return

  currentIndex.value = (index + slides.value.length) % slides.value.length

  await nextTick()

  animarDiapositiva()
}

const siguiente = () => irA(currentIndex.value + 1)
const anterior = () => irA(currentIndex.value - 1)

// Autoplay con guard
const iniciarAutoplay = () => {
  detenerAutoplay()
  autoplayTimer = setInterval(siguiente, AUTOPLAY_MS)
}

const detenerAutoplay = () => clearInterval(autoplayTimer)

onMounted(async () => {
  await obtenerDestacados()

  if (slides.value.length === 0) return

  await nextTick()

  animarDiapositiva()
  iniciarAutoplay()
})

// Limpieza para evitar timers huerfanos
onBeforeUnmount(detenerAutoplay())
</script>

<template>
  <section
    class="hero-carousel position-relative overflow-hidden bg-black"
    @mouseenter="detenerAutoplay"
    @mouseleave="iniciarAutoplay"
  >
    <!-- Loading -->
    <div v-if="loading" class="d-flex align-items-center justify-content-center h-100">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Cargando series destacadas...</span>
      </div>
    </div>

    <!-- Errores -->
    <div v-else-if="error" class="d-flex align-items-center justify-content-center h-100">
      <div class="alert alert-danger mb-0">{{ error }}</div>
    </div>

    <!-- Contenido -->
    <template v-else-if="currentSlide">
      <!-- Capa 1: imagen de fondo -->
      <img
        :src="currentSlide.imagen"
        :alt="currentSlide.titulo"
        class="hero-carousel__bg position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <!-- Capa 2: Overlay -->
      <div class="hero-carousel__overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <!-- Capa 3: Contenido -->
      <div class="container h-100 position-relative ps-md-5">
        <div
          class="hero-carousel__content d-flex flex-column justify-content-center h-100 text-white py-4"
        >
          <span class="badge text-bg-warning text-uppercase fw-bold align-self-start mb-3">
            <i class="fa-solid fa-fire"></i>
            Destacado
          </span>

          <h1 class="fw-bold">{{ currentSlide.titulo }}</h1>
        </div>
      </div>
    </template>
  </section>
</template>

<style scoped>
.hero-carousel {
  height: 100vh;
}

.hero-carousel__bg {
  object-position: center top;
  filter: brightness(0.7);
}

.hero-carousel__overlay {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.hero-carousel__content {
  z-index: 2;
  position: relative;
  max-width: 640px;
}
</style>
