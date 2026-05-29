<script setup>
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
</script>

<template>
  <main class="container py-4">
    <h1>Catálogo de michis</h1>

    <p v-if="user">
      Sesión iniciada como <b>{{ user.email }}</b>

      Entra a <RouterLink to="/michis"> /michis </RouterLink> para ver el catálogo.
    </p>

    <p v-else>
      Para ver el catálogo necesitas
      <RouterLink to="/login"> iniciar sesión </RouterLink>
      o
      <RouterLink to="/register">registrarte</RouterLink>.
    </p>
  </main>
</template>
