<script setup></script>

<template>
  <header class="container py-3 border-bottom">
    <h1 class="mb-3">Mini Catálogo</h1>

    <nav class="d-flex gap-3">
      <router-link to="/" active-class="fw-bold text-decoration-underline"> Inicio </router-link>

      <router-link to="/productos" active-class="fw-bold text-decoration-underline">
        Productos
      </router-link>
    </nav>
  </header>

  <main class="container py-4">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
