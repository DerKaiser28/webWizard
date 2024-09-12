import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { createRouter, createWebHistory } from 'vue-router';
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura'

import home from './views/home.vue'
import categories from './views/categories.vue'
import profile from './views/profile.vue'

const routes = [
    { path: '/', component: home },
    { path: '/categories', component: categories },
    { path: '/profile', component: profile },    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router).mount("#app");

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });

 app.use(ToastService);
