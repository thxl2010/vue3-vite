import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import './styles/index.scss';
import ElementPlus from './plugins/element-plus';
import * as ElIcons from '@element-plus/icons';

const app = createApp(App);

for (const iconName in ElIcons) {
  if (Object.prototype.hasOwnProperty.call(ElIcons, iconName)) {
    app.component(iconName, (ElIcons as any)[iconName]);
  }
}

app.use(store, key).use(router).use(ElementPlus).mount('#app');
