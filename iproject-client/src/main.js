import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({  store  }) => {
    store.$router = markRaw(router)
})
app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: '331000375864-nsqaubq36q1hh1s21181ao3v6jameanf.apps.googleusercontent.com'
  })
app.mount('#app')
