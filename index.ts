import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './app.vue'
import {useProductStore} from './stores/ProductStore';
import {useUserAuthStore} from './stores/UserAuthStore'





const app = createApp(App)





const pinia = createPinia()
app.use(pinia)
useProductStore();
useUserAuthStore();

// In your main Vue instance (main.js or similar)


app.mount('#app');
