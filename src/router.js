import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Homepage',
    },
  },
];

export function createRouterInstance() {
  const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
  router.beforeEach(async (to, from, next) => {
    const defaultTitle = "Recipe App";
    document.title = to.meta?.title + ' | ' + defaultTitle || defaultTitle;
    next();
  });
  return router;
}