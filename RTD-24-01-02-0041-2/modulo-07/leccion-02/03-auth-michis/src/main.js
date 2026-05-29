import { createApp } from 'vue'
import App from './App.vue'

// Firebase configuration
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.js'
import router from './router'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.use(router)

app.mount('#app')
