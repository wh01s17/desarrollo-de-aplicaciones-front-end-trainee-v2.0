<script setup>
import { onMounted, ref, watch } from 'vue';

const personajes = ref([]);
const personajeSeleccionado = ref(null);
const loading = ref(true);
const error = ref(null);
const modoOscuro = ref(true);
const filtro = ref('');

onMounted(async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    if (!response.ok) throw new Error('No se pudo cargar la data');

    const data = await response.json();

    personajes.value = data.results;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

// watch: Observa de forma reactiva, los cambios de una fuente (ref, prop computada, etc)
// Ejecuta un callback cada vez que su valor cambia
watch(modoOscuro, (activo) => {
  document.documentElement.setAttribute('data-bs-theme', activo ? 'dark' : 'light');
});

const seleccionarPersonaje = (personaje) => {
  personajeSeleccionado.value = personaje;
};

const personajesFiltrados = () => {
  const filter = filtro.value.toLowerCase();

  const data = personajes.value.filter((p) => p.name.toLowerCase().includes(filter));

  return data;
};
</script>

<template>
  <main class="container py-4 app">
    <header class="d-flex justify-content-between align-items-center mb-4">
      <div class="logo">
        <img src="../public/logo.png" alt="rick-morty-logo" class="img-fluid" />
      </div>

      <div class="d-flex align-items-center gap-2">
        <i class="fa-solid fa-sun"></i>

        <div class="form-check form-switch m-0 p-0">
          <input
            type="checkbox"
            class="form-check-input ms-0"
            id="modoOscuro"
            role="switch"
            :aria-label="modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            v-model="modoOscuro"
          />
        </div>

        <i class="fa-solid fa-moon"></i>
      </div>
    </header>

    <!-- cargando -->
    <div v-if="loading" class="alert alert-secondary text-center">Cargando personajes...</div>

    <!-- errores -->
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- resultados -->
    <section v-else>
      <input
        v-model="filtro"
        type="search"
        class="form-control mb-4"
        placeholder="Buscar personaje por nombre..."
      />

      <div class="row g-3">
        <div
          v-for="personaje in personajesFiltrados()"
          :key="personaje.id"
          class="col-6 col-md-4 col-lg-3"
        >
          <article
            v-if="personajeSeleccionado && personajeSeleccionado.id === personaje.id"
            class="card h-100 border-3"
            :class="{
              'border-success': personaje.status === 'Alive',
              'border-danger': personaje.status === 'Dead',
              'border-warning': personaje.status === 'unknown',
            }"
          >
            <div class="card-body text-center">
              <img
                :src="personaje.image"
                :alt="personaje.name"
                class="rounded-circle mb-3 avatar"
              />
              <h5 class="card-title">{{ personaje.name }}</h5>

              <p class="mb-0"><b>Estado: </b>{{ personaje.status }}</p>

              <p class="mb-0"><b>Especie: </b>{{ personaje.species }}</p>

              <p class="mb-0"><b>Origen: </b>{{ personaje.origin.name }}</p>

              <p class="mb-2"><b>Ubicación: </b>{{ personaje.location.name }}</p>

              <button
                class="btn btn-outline-secondary btn-sm"
                @click="personajeSeleccionado = null"
              >
                Cerrar ficha
              </button>
            </div>
          </article>

          <div v-else class="card h-100 personaje-card" @click="seleccionarPersonaje(personaje)">
            <img :src="personaje.image" :alt="personaje.name" class="card-img-top" />

            <div class="card-body p-2 text-center">
              <h6 class="card-title mb-0">
                {{ personaje.name }}
              </h6>

              <span
                class="badge"
                :class="{
                  'text-bg-success': personaje.status === 'Alive',
                  'text-bg-danger': personaje.status === 'Dead',
                  'text-bg-warning': personaje.status === 'unknown',
                }"
              >
                {{ personaje.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.app {
  max-width: 960px;
}

.logo {
  width: 320px;
}

.avatar {
  width: 160px;
  height: 160px;
  object-fit: cover;
}

.personaje-card {
  cursor: pointer;
  transition: 0.15s ease;
}

.personaje-card:hover {
  transform: translateY(-4px);
}
</style>
