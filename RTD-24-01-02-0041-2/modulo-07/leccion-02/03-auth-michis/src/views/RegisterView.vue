<script setup>
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const register = async () => {
  try {
    error.value = null

    await createUserWithEmailAndPassword(auth, email.value, password.value)

    router.push('/michis')
  } catch (err) {
    error.value = err.message
  }
}
</script>

<template>
  <main class="container py-4 app">
    <h1>Crear cuenta</h1>

    <form @submit.prevent="register">
      <input v-model="email" type="email" class="form-control mb-2" placeholder="Correo" />
      <input
        v-model="password"
        type="password"
        class="form-control mb-2"
        placeholder="Contraseña (mínimo 6 caracteres)"
      />

      <button type="submit" class="btn btn-success w-100">Crear cuenta</button>
    </form>

    <p v-if="error" class="text-danger">{{ error }}</p>

    <p class="text-muted small mt-2">
      Ya tienes cuenta? <RouterLink to="/login">Inicia sesión</RouterLink>
    </p>
  </main>
</template>

<style scoped>
.app {
  max-width: 640px;
}
</style>
