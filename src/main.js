import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

createApp(App).use(router).mount('#app');
