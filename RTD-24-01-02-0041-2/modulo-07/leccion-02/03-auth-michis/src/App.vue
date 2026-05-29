<script setup>
import { useCurrentUser } from 'vuefire'
import { auth } from './firebase'
import { useRouter } from 'vue-router'
import { signOut } from 'firebase/auth'

const user = useCurrentUser()
const router = useRouter()

const logut = async () => {
  await signOut(auth)
  router.push('/')
}
</script>

<template>
  <nav class="navbar px-3">
    <RouterLink class="navbar-brand" to="/"> 😼 Michis </RouterLink>

    <div class="d-flex align-items-center gap-2">
      <RouterLink v-if="!user" class="nav-link" to="/login"> Login </RouterLink>

      <RouterLink v-if="!user" class="nav-link" to="/register"> Registro </RouterLink>

      <RouterLink v-if="user" class="nav-link" to="/michis"> Michis </RouterLink>

      <span v-if="user" class="text-muted small">{{ user.email }}</span>
      <button v-if="user" class="btn btn-outline-secondary btn-sm" @click="logut">Salir</button>
    </div>
  </nav>

  <RouterView />
</template>
