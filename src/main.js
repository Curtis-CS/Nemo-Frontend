import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import HowTo from './views/HowTo.vue'
import "bootstrap/dist/css/bootstrap.css"

//import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/aboutus', name: 'AboutUs', component: AboutUs},
        {path: '/howto', name: 'HowTo', component: HowTo}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"