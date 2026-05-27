<script setup>
import axios from 'axios'
import { ref } from 'vue'

const API_KEY = 'free_user_3EEUV19Zs7kb4yLFOQT1v6QoUrY'

const email = ref('eve.holt@reqres.in')
const password = ref('cityslicka')
const token = ref(null)
const profile = ref(null)

const loading = ref(false)
const error = ref(null)

const login = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await axios.post(
      'https://reqres.in/api/login',
      {
        email: email.value,
        password: password.value,
      },
      {
        headers: { 'x-api-key': API_KEY },
      },
    )

    token.value = response.data.token

    await fetchProfile()
  } catch (err) {
    if (err.response) {
      error.value = `Login falló: ${err.response.data.error || err.response.status}`
    } else if (err.request) {
      error.value = 'No hubo respuesta del servidor (error de red)'
    } else {
      error.value = 'Error al construir la petición'
    }
  } finally {
    loading.value = false
  }
}

const fetchProfile = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        'x-api-key': API_KEY,
        Authorization: `Bearer ${token.value}`,
      },
    })

    profile.value = response.data.data
    console.log(profile.value)
  } catch (err) {
    error.value = 'No se pudo obtener el perfil con el token'
    console.log(err)
  }
}

const logout = () => {
  token.value = null
  profile.value = null
  error.value = null
}
</script>

<template>
  <section class="container my-4 app">
    <h2>Login con token</h2>

    <form v-if="!token" @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" class="form-control" type="email" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input v-model="password" class="form-control" type="password" required />
      </div>

      <button class="btn btn-primary w-100">{{ loading ? 'Ingresando...' : 'Ingresar' }}</button>

      <div v-if="error" class="alert alert-danger mt-3">🔴 {{ error }}</div>
    </form>

    <div v-else>
      <div class="alert alert-success">
        Sesión iniciada
        <br />
        <small
          >Token: <code>{{ token }}</code></small
        >
      </div>

      <div v-if="profile" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ profile.first_name }} {{ profile.last_name }}</h5>

          <p class="card-text text-muted mb-0">{{ profile.email }}</p>
        </div>
      </div>

      <button class="btn btn-outline-secondary w-100 mt-3" @click="logout">Cerrar sesión</button>
    </div>
  </section>
</template>

<style scoped>
.app {
  max-width: 640px;
}
</style>
