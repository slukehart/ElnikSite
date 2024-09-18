// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    firebase: {
      gen: 2,
      nodeVersion: "18"
    }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    '@nuxtjs/device',
    "nuxt-tiptap-editor",
  ],

  tiptap: {
    prefix: 'Tiptap',
  },
  ssr: true, // enable server-side rendering
  css: ["../assets/css/main.css"],
  plugins: ['../plugins/firebase.ts'],
  compatibilityDate: "2024-08-28",
});