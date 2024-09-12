import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Theme from '@primevue/themes/aura';
import AnimateOnScroll from 'primevue/animateonscroll';


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

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.directive('animateonscroll', AnimateOnScroll);
app.use(router).mount("#app");
app.use(PrimeVue, {
    theme: {
        preset: Theme
    }
});
