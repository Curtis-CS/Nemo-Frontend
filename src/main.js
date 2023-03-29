import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import { store } from "./store"

import App from './App.vue'
import Nemo from "./views/Nemo.vue"
import RunNemo from "./views/RunNemo.vue"
import AboutUs from './views/AboutUs.vue'
import ConfigureNemo from './views/ConfigureNemo.vue'
import Results from './views/Results.vue'
import HowTo from './views/HowTo.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'RunNemo', component: RunNemo},
        {path: '/howtouse', name: 'HowTo', component: HowTo},
        {path: '/aboutus', name: 'AboutUs', component: AboutUs},
        {path: '/configurenemo', name: 'ConfigureNemo', component: ConfigureNemo},
        {path: '/results', name: 'Results', component: Results}
    ]
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"