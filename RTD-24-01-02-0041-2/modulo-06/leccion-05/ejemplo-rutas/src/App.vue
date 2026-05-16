<script setup>
const productos = [
  {
    nombre: 'Manzana',
    precio: 2000,
  },
]
</script>

<template>
  <header class="app-header">
    <h1>Mini Cine - Vue Router</h1>

    <nav class="app-header__nav">
      <router-link class="app-header__link" to="/" active-class="app-header__link--active">
        Home
      </router-link>

      <router-link class="app-header__link" to="/movies" active-class="app-header__link--active">
        Peliculas
      </router-link>

      <router-link class="app-header__link" to="/about" active-class="app-header__link--active">
        About
      </router-link>
    </nav>
  </header>

  <main class="app-main">
    <router-view></router-view>
  </main>
</template>

<style scoped>
.app-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.app-header__nav {
  margin-top: 0.5rem;
}

.app-header__link {
  color: black;
  margin-right: 0.5rem;
  text-decoration: none;
}

.app-header__link--active {
  font-weight: bold;
  text-decoration: underline;
}

.app-main {
  padding: 1rem;
}
</style>
