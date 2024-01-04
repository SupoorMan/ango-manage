import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuedraggable/dist/vuedraggable.css'
import draggable from 'vuedraggable'

createApp(App).use(store).use(router).component('draggable', draggable).mount('#app')

