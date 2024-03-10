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
    '@vueuse/motion/nuxt',
    'nuxt-og-image',
    '@nuxtjs/fontaine',
  ],
  colorMode: { classSuffix: '', preference: 'dark', storageKey: 'site-color-mode' },
  css: ['~/styles/base.css', '~/styles/overrides.css', '~/styles/font.css', '~/styles/animation.css'],
  content: {
    documentDriven: true,
    markdown: { remarkPlugins: ['remark-reading-time'] },
  },
  runtimeConfig: {
    spotifyClientSecret: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    spotifyClientId: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_ID,
  },
  nitro: { preset: 'render-com' },
})
