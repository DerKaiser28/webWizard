<template>
        <div class="m-10">
            <Tabs></Tabs>
            
        </div>
</template>

<script setup>
    import Tabs from '../components/tabs.vue'
    import { appStore } from '../pinia/appStore.js';
    import Button from 'primevue/Button'

    const appPinia = appStore();
    
</script>