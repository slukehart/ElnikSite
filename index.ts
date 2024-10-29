import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app.vue";
import { useProductStore } from "./stores/ProductStore";
import { useUserAuthStore } from "./stores/UserAuthStore";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});
useProductStore();
useUserAuthStore();
useLinkedInPostStore();

// In your main Vue instance (main.js or similar)

app.mount("#app");
