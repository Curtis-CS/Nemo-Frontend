import {createRouter, createWebHistory} from 'vue-router'

import RunNemo from "./views/RunNemo.vue"
import AboutUs from './views/AboutUs.vue'
import ConfigureNemo from './views/Settings.vue'
import Results from './views/Results.vue'
import HowTo from './views/HowTo.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'RunNemo', component: RunNemo},
        {path: '/howtouse', name: 'HowTo', component: HowTo},
        {path: '/aboutus', name: 'AboutUs', component: AboutUs},
        {path: '/configurenemo', name: 'ConfigureNemo', component: ConfigureNemo},
        {path: '/results', name: 'Results', component: Results}
    ]
})