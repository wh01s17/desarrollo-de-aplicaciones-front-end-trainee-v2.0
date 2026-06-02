<script setup></script>

<template>
  <header>
    <h1>Ejemplo Vuex 4</h1>

    <nav>
      <RouterLink to="/"> Inicio </RouterLink>
      <RouterLink to="/posts"> Posts (requiere sesión) </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
