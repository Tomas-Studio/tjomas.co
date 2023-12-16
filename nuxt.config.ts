// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  colorMode: { classSuffix: '', preference: 'dark', storageKey: 'site-color-mode' },
})
