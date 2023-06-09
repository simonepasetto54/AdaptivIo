import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useOidcStore } from "./stores/auth";
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import './assets/style/main.css'

const app = createApp(App)
app.use(router).use(createPinia(() => useOidcStore()))
app.mount('#app')
