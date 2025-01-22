import { createSSRApp } from 'vue'
import { createRouterInstance } from './router';
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouterInstance();
  app.use(router);
  if (typeof window !== 'undefined') {
    import('aos').then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 200,
      });
    });
  }
  return { app, router };
}
