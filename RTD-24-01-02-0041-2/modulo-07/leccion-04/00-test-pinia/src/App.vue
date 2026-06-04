<script setup></script>

<template>
  <header>
    <h1>Ejemplo Pinia 🍍</h1>
    <nav>
      <RouterLink to="/"> Inicio </RouterLink>|
      <RouterLink to="/posts"> Posts (requiere sesión) </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
