import { createApp } from 'vue'
import { router } from "./router"
import { store } from "./store"

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"