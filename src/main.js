import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';
// import { Inkline } from '@inkline/inkline/src';
// import * as components from '@inkline/inkline/src/components';
// import '@inkline/inkline/src/inkline.scss';

const app = createApp(App);
// app.use(Inkline, { components });
app.use(router);
app.mount('#app');
