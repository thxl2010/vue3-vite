import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import './styles/index.scss';
import ElementPlus from './plugins/element-plus';

createApp(App).use(store, key).use(router).use(ElementPlus).mount('#app');
