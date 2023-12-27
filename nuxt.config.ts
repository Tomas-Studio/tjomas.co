// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'floating-vue/nuxt',
    '@nuxt/image',
    '@nuxt/content',
  ],
  colorMode: { classSuffix: '', preference: 'dark', storageKey: 'site-color-mode' },
  css: ['~/styles/base.css', '~/styles/overrides.css', '~/styles/font.css'],
})
