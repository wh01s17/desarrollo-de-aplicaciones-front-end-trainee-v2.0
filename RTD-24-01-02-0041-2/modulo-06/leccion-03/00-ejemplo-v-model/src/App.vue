<template>
  <main class="container py-4 app">
    <h1 class="mb-4">Ejemplo v-model</h1>

    <form>
      <div class="mb-4">
        <label class="form-label">Nombre (.trim)</label>
        <input type="text" class="form-control" v-model.trim="nombre" placeholder="nombre" />
      </div>

      <div class="mb-4">
        <label class="form-label">Edad (.number)</label>

        <!-- validación visual  -->
        <input
          type="number"
          v-model.number="edad"
          class="form-control"
          :class="{
            'is-invalid': edad !== null && (edad < 0 || edad > 120),
          }"
        />

        <!--
          Bootstrap oculta .invalid-feedback por defecto (display: none).
          Sólo se muestra cuando un hermano previo tiene la clase .is-invalid
          (regla CSS: .is-invalid ~ .invalid-feedback { display: block }).
          Aquí el <input> recibe 'is-invalid' de forma condicional vía :class,
          así que el div de feedback aparece/desaparece según esa expresión.
        -->
        <div class="invalid-feedback">Debe estar entre 0 y 120</div>
      </div>

      <div class="mb-4">
        <label class="form-label">Biografía (.lazy)</label>
        <textarea v-model.lazy="biografia" class="form-control"></textarea>
        <small class="text-muted">Caracteres: {{ biografia.length }}</small>
      </div>

      <div class="mb-4">
        <label class="form-label d-block">Nivel (radio)</label>
        <div v-for="n in niveles" :key="n" class="form-check form-check-inline">
          <input type="radio" :value="n" class="form-check-input" v-model="nivel" :id="`r-${n}`" />
          <label :for="`r-${n}`" class="form-check-label"> {{ n }}</label>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label d-block">Intereses (checkbox array)</label>
        <div v-for="o in opciones" class="form-check form-check-inline" :key="o">
          <input
            type="checkbox"
            :value="o"
            :id="`c-${n}`"
            class="form-check-input"
            v-model="intereses"
          />
          <label :for="`c-${n}`" class="form-check-label">{{ o }}</label>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label">Tecnolgía principal (select)</label>
        <select class="form-select" v-model="tecnologia">
          <option disabled value="">Selecciona una tecnologia</option>
          <option v-for="o in opciones" :value="o" :key="o">{{ o }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="form-label">Tecnolgías (select multiple)</label>
        <select class="form-select" v-model="tecnologia" multiple>
          <option v-for="o in opciones" :value="o" :key="o">{{ o }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="form-label">Pais (objeto como valor)</label>
        <select class="form-select" v-model="pais">
          <option disabled :value="null">Selecciona un pais</option>
          <option v-for="p in paises" :value="p" :key="p.code">{{ p.nombre }}</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary mb-4" :disabled="!formularioValido">
        Enviar
      </button>
    </form>

    <ResumenFormulario :datos="resumen" class="mt-5" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ResumenFormulario from './components/ResumenFormulario.vue'

const nombre = ref('')
const edad = ref(null)
const biografia = ref('')
const nivel = ref('')
const intereses = ref([])
const tecnologia = ref('')
const tecnologias = ref([])
const pais = ref(null)

const niveles = ['básico', 'intermedio', 'avanzado']
const opciones = ['Vue', 'React', 'Angular']
const paises = [
  {
    code: 'CL',
    nombre: 'Chile',
  },
  {
    code: 'AR',
    nombre: 'Argentina',
  },
]

const resumen = computed(() => ({
  nombre: nombre.value,
  edad: edad.value,
  biografia: biografia.value,
  nivel: nivel.value,
  intereses: intereses.value,
  tecnologia: tecnologia.value,
  tecnologias: tecnologias.value,
  pais: pais.value,
}))

const formularioValido = computed(() => {
  return (
    nombre.value.length >= 3 &&
    edad.value !== null &&
    edad.value !== 0 &&
    edad.value <= 120 &&
    intereses.value.length > 0 &&
    pais.value !== null
  )
})
</script>

<style scoped>
.app {
  max-width: 600px;
}
</style>
