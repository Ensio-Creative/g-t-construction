import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import titlemix from './mixins/titlemix'
import './style/main.scss'

createApp(App).mixin(titlemix).use(router).mount('#app')
