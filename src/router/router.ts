import { RouteRecordRaw } from 'vue-router';

import AppLayout from '@/layout/AppLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        meta: {
          title: 'home',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/study/study.vue'),
    meta: {
      title: 'study Vite & Vue@3 & TS',
    },
  },
];

export default [...routes];
