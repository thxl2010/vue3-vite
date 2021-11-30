import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// 进度条的配置
nprogress.configure({});

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// VueRouter 4 中可以不写 next 了，默认就是通过状态
router.beforeEach((to, from) => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
