<template>
        <div class="m-10">
            <Tabs></Tabs>
                <category class="my-5"></category>
                <category class="my-5"></category>
                <category class="my-5"></category>
                <category class="my-5"></category>
                <category class="my-5"></category>
        </div>
</template>

<script setup>
    import Tabs from '../components/tabs.vue'
    import category from '../components/category.vue'
    import { appStore } from '../pinia/appStore.js';
    import Button from 'primevue/Button'
    import { ref } from 'vue'

    const appPinia = appStore();

    const categoryData = ref()

    const data = {
        langaues: [

        ],
        genres: [

        ],
        sports: [

        ]
    }


    
</script>