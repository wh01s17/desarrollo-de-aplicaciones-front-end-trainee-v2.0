<script setup>
import { auth } from '@/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()

const login = async () => {
  try {
    error.value = null

    await signInWithEmailAndPassword(auth, email.value, password.value)

    router.push('/michis')
  } catch (err) {
    console.log(err)
    error.value = 'Correo o contraseña inválidos.'
  }
}
</script>

<template>
  <main class="container py-4 app">
    <h1>Iniciar sesión</h1>

    <form @submit.prevent="login">
      <input v-model="email" type="email" class="form-control mb-2" placeholder="Correo" />
      <input
        v-model="password"
        type="password"
        class="form-control mb-2"
        placeholder="Contraseña (mínimo 6 caracteres)"
      />

      <button type="submit" class="btn btn-success w-100">Iniciar sesión</button>
    </form>

    <p v-if="error" class="text-danger">{{ error }}</p>

    <p class="text-muted small mt-2">
      No tienes cuenta? <RouterLink to="/register">Registrate</RouterLink>
    </p>
  </main>
</template>

<style scoped>
.app {
  max-width: 640px;
}
</style>
