import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {createStore} from 'vuex'

import App from './App.vue'
import RunNemo from "./views/RunNemo.vue";
import AboutUs from './views/AboutUs.vue'
import ConfigureNemo from './views/ConfigureNemo.vue'
import Results from './views/Results.vue'
import HowTo from './views/HowTo.vue'
import "bootstrap/dist/css/bootstrap.css"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'HowTo', component: HowTo},
        {path: '/aboutus', name: 'AboutUs', component: AboutUs},
        {path: '/configurenemo', name: 'ConfigureNemo', component: ConfigureNemo},
        {path: '/results', name: 'Results', component: Results},
        {path: '/runnemo', name: 'RunNemo', component: RunNemo}
    ]
})

const store = createStore({
    state: {
        result_files: []
    },
    getters: {
        result_files (state) {
            return state.result_files
        }
    },
    mutations: {
        addFile(state, file) {
            state.result_files.append(file)
        }
    },
    actions: {}
})

createApp(App)
    .use(router, store)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"