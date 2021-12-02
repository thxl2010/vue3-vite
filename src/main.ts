import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import './styles/index.scss';
import ElementPlus from './plugins/element-plus';

const app = createApp(App);

app.use(store, key).use(router).use(ElementPlus);

// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts');
for (const path in modules) {
  app.use(modules[path].default);
}

app.mount('#app');
