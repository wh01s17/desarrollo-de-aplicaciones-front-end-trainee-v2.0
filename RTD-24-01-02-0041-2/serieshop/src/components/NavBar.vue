<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Estado reactivo, que indica si el usuario ha hecho scroll mas allá del umbral
const scrolled = ref(false)

// cantidad maxima de pixeles de scroll vertical a partir de la cual se activa el cambio visual
const SCROLL_THRESHOLD = 50

const manejarScroll = () => {
  scrolled.value = window.scrollY > SCROLL_THRESHOLD
}

onMounted(() => {
  window.addEventListener('scroll', manejarScroll, { passive: true })
  manejarScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', manejarScroll)
})
</script>

<template>
  <nav
    class="nav-overlay navbar navbar-expand-lg fixed-top px-md-5"
    :class="{ 'nav-overlay--scrolled': scrolled }"
  >
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">
        <i class="fa-solid fa-clapperboard text-warning"></i>
        SerieShop
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-overlay {
  background-color: transparent;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;
}

.nav-overlay--scrolled {
  background-color: rgba(33, 37, 41, 0.7);
  backdrop-filter: blur(8px);
}
</style>
