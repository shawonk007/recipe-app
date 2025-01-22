import './style.css'
import { createApp } from './main'
import { createRouterInstance } from './router';

const { app, router } = createApp();

router.isReady().then(() => {
  app.mount('#app');
});
