import axios from 'axios'

export const api = axios.create({
  // Dirección común a todas las peticiones.
  // Luego en vez de escribir la url completa, basta con poner la ruta api.get('/posts')
  baseURL: 'https://jsonplaceholder.typicode.com',

  // Tiempo máximo que se espera una respuesta, antes de cancelarla
  timeout: 5000,
})
