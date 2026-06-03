<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { animate, stagger } from 'animejs'
import { api } from '@/api/api'

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
        const { data } = await api.get(`/shows/${id}`)

        return data
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

          <h1 class="fw-bold mb-2">{{ currentSlide.titulo }}</h1>

          <div class="d-flex align-items-center gap-3 mb-3 fs-5">
            <span class="badge text-bg-secondary">{{ currentSlide.categoria }}</span>
            <span>⭐️ {{ currentSlide.rating }}</span>
          </div>

          <p class="hero-carousel__description lead mb-4" v-html="currentSlide.descripcion"></p>

          <div class="d-flex align-items-center gap-4 flex-wrap">
            <span class="fs-2 fw-bold text-warning"
              >${{ currentSlide.precio.toLocaleString('es-CL') }}</span
            >

            <button class="btn btn-warning btn-lg fw-semibold">
              <i class="fa-solid fa-cart-shopping"></i>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <button
        class="hero-carousel__arrow position-absolute start-0 top-50 ms-4 d-flex align-items-center justify-content-center rounded-circle border-0 translate-middle-y"
        @click="anterior"
        aria-label="Anterior"
        type="button"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button
        class="hero-carousel__arrow position-absolute end-0 top-50 me-4 d-flex align-items-center justify-content-center rounded-circle border-0 translate-middle-y"
        @click="siguiente"
        aria-label="Siguiente"
        type="button"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <ul
        class="hero-carousel__indicators position-absolute bottom-0 start-0 end-0 d-flex justify-content-center gap-2 list-unstyled mb-4"
      >
        <li v-for="(slide, index) in slides" :key="slide.id">
          <button
            type="button"
            class="hero-carousel__dot border-0 p-0"
            :class="{
              'hero-carousel__dot--active': index === currentIndex,
            }"
            :aria-label="`Ir al slide ${index + 1}`"
            @click="irA(index)"
          ></button>
        </li>
      </ul>
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

.hero-carousel__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.hero-carousel__arrow {
  z-index: 3;
  width: 48px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.25rem;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.hero-carousel__arrow:hover {
  background: var(--bs-warning);
  color: #000;
  transform: translateY(-50%) scale(1.1);
}

.hero-carousel__indicators {
  z-index: 3;
}

.hero-carousel__dot {
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  transition:
    background 0.2s ease,
    width 0.2s ease;
}

.hero-carousel__dot--active {
  background: var(--bs-warning);
  width: 48px;
}
</style>
