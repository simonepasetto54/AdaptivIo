import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import './assets/style/main.css'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { 
//     faHeart,
// } from '@fortawesome/free-regular-svg-icons'

// library.add(
//     faHeart,
//     )
const app = createApp(App)

app.use(createPinia())
// app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(router)

app.mount('#app')
