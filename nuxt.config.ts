// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'floating-vue/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@vueuse/motion/nuxt',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ], devtools: { enabled: true },

  css: ['~/styles/base.css', '~/styles/overrides.css', '~/styles/font.css', '~/styles/animation.css'],

  colorMode: { classSuffix: '', preference: 'dark', storageKey: 'site-color-mode' },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-reading-time': {},
        },
      },
    },
  },

  runtimeConfig: {
    spotifyClientSecret: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    spotifyClientId: process.env.NUXT_PUBLIC_SPOTIFY_CLIENT_ID,
  }, future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-08-01',

  nitro: { preset: 'render-com' },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      { name: 'Urbanist', provider: 'google' },
      { name: 'DM Mono', provider: 'google' },
      { name: 'Libre Baskerville', provider: 'google' },
      { name: 'Luckiest Guy', provider: 'google' },
    ],
  },
})
