import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import titlemix from './mixins/titlemix.js'
import VueSplide from '@splidejs/vue-splide'

import './style/main.scss'
import '@splidejs/splide/dist/css/splide.min.css';

createApp(App).mixin(titlemix).use(router).use(VueSplide).mount('#app')
