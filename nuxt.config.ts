// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2,
      nodeVersion: "18",
    },
  },

  app: {
    head: {
      script: [
        {
          src: "https://platform.linkedin.com/badges/js/profile.js",
          type: "text/javascript",
          referrerpolicy: "no-referrer",
        },
        // Add more scripts as needed
      ],
      link: [
        {
          rel: "stylesheet",
          href: "",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "@primevue/nuxt-module",
  ],
  primevue: {
    // options: {
    //   ripple: true,
    //   // theme: {
    //   //   preset: Aura,
    //   //   options: {
    //   //     prefix: "p",
    //   //     darkModeSelector: "system",
    //   //     cssLayer: false,
    //   //   },
    //   // },
    // },
  },

  ssr: true, // enable server-side rendering
  css: ["../assets/css/main.css"],
  plugins: ["../plugins/firebase.ts"],
  compatibilityDate: "2024-08-28",
});
