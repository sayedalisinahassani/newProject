import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(fas)
// Vue.component('font-icon',FontAwesomeIcon)

createApp(App).use(createPinia()).mount('#app')
