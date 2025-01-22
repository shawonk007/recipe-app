import { createMemoryHistory, createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';
import Single from '@/pages/Single.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Homepage',
    },
  },
  {
    path: '/recipes/:id/:title?',
    name: 'single',
    component: Single,
    meta: {
      title: 'Recipe',
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
    const pageTitle = to.params.title 
      ? `${to.params.title} | ${defaultTitle}` 
      : to.meta?.title + ' | ' + defaultTitle || defaultTitle;
    document.title = pageTitle;
    next();
  });
  return router;
}