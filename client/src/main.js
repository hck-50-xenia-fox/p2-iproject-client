import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia = createPinia()

// const socket = io('http://localhost:3000')

// socket.on('serverMsg', (data)=> {
//     console.log(`I should be in room No.${data}`)
//     clientRoom = data
// })

// socket.on('switchFromServer', () => {

// })

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

app.use(router)
app.use(pinia)
app.mount('#app')