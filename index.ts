import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './app.vue'
import {useProductStore} from './stores/ProductStore';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Theme
import 'primevue/resources/primevue.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons CSS



const app = createApp(App)




const pinia = createPinia()
app.use(pinia)
useProductStore();
app.use(PrimeVue, { unstyled: false });

// In your main Vue instance (main.js or similar)


app.mount('#app');
