import { defineStore } from 'pinia'

export const appStore = defineStore('appStore', {
    state: () => {
        return {
            nav: null,
        }
    },
    getters: {
        
    },
    actions: {
    }, persist: true
})