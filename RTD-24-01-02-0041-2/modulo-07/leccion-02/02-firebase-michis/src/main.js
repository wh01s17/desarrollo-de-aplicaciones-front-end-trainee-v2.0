import { createApp } from 'vue'
import App from './App.vue'

// Firebase configuration
import { VueFire } from 'vuefire'
import { firebaseApp } from './firebase.js'

const app = createApp(App)

app.use(VueFire, { firebaseApp })

app.mount('#app')
