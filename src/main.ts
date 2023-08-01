import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//适配js
import '@/common/flex';

const app = createApp(App);
app.use(router);
app.mount('#app')
