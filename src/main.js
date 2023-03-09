import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import {createStore} from 'vuex'

//Importing our views and components
import App from './App.vue'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import ConfigureNemo from './views/ConfigureNemo.vue'
import Results from './views/Results.vue'
import HowTo from './views/HowTo.vue'
import "bootstrap/dist/css/bootstrap.css"

const router = createRouter({
    history: createWebHistory(),
    //Configuring our routes, with names and mathcing imports
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/aboutus', name: 'AboutUs', component: AboutUs},
        {path: '/results', name: 'Results', component: Results},
        {path: '/configurenemo', name: 'ConfigureNemo', component: ConfigureNemo},
        {path: '/howto', name: 'HowTo', component: HowTo}
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