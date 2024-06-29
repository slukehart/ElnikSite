import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './app.vue'
import {useProductStore} from './stores/ProductStore';
import {use} from 'h3';
import PrimeVue from 'primevue/config';



/*import { Field, Form, ErrorMessage, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';*/

// the file we created above with `database`, `firestore` and other exports

const app = createApp(App)

/*app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
defineRule('required', required);*/


const pinia = createPinia()
app.use(pinia)
useProductStore();
app.use(PrimeVue, { unstyled: true });

// In your main Vue instance (main.js or similar)


app.mount('#app');
