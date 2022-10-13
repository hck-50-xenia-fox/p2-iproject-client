import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import Vue3Geolocation from 'vue3-geolocation'


import App from './App.vue'
import router from './router'

import './input.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
    store.$router = markRaw(router)
})
app.use(pinia)
app.use(router)
app.use(Vue3Geolocation)
app.mount('#app')
