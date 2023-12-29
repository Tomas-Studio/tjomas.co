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
  ],
  colorMode: { classSuffix: '', preference: 'dark', storageKey: 'site-color-mode' },
  css: ['~/styles/base.css', '~/styles/overrides.css', '~/styles/font.css'],
  content: {
    documentDriven: true,
    markdown: { remarkPlugins: ['remark-reading-time'] },
    // @ts-expect-error recent theme exclude in type
    highlight: { theme: 'vitesse-black' },
  },
})
