<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" @change="handleOptionLink" class="block w-full rounded-md border-gray-900 focus:border-gray-500 focus:ring-gray-500">
        <option v-for="(tab, tabIdx) in tabs" :key="tab.name" :selected="tab.current" :value="tabIdx">{{ tab.name }}</option>
      </select>
    </div>
    <div class="hidden sm:block" :key="tabs">
      <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
        <button v-for="(tab, tabIdx) in tabs" @click="change(tabIdx)" :key="tab.name" :href="tab.href" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
          <span>{{ tab.name }}</span>
          <span aria-hidden="true" :class="[tab.current ? 'bg-gray-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { appStore } from '../pinia/appStore.js';
import { ref } from 'vue';

const appPinia = appStore();

const tabs = ref([
  { name: 'Languages', href: '#', current: true},
  { name: 'Genres', href: '#', current: false },
  { name: 'Sports', href: '#', current: false },
]);

function change(tabIdx){
    modifyTab(tabIdx);
    appPinia.tab = tabIdx;
}

function handleOptionLink(event){
  appPinia.tab = event.target.value;
}

function modifyTab(tabIdx){
  tabs.value.forEach((tab, index) => {
    if(index === tabIdx){
      tab.current = true;
    }else{
      tab.current = false;
    }
  });
  //console.log(tabs)
}

modifyTab(appPinia.tab)
</script>