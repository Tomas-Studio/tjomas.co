import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'

export default defineConfig({
  shortcuts: [
    {
      'navigation2': 'flex gap-x-1 sm:gap-x-2 pl2 pr1 wfull bg-white/90 dark:bg-white/3 border border-gray-3 dark:border-gray-2/20 shadow-lg shadow-gray-9/6 dark:shadow-white/2 backdrop-blur rounded-sm',
      'navigation': 'flex gap-x-1 sm:gap-x-2 wfull px5 lg:px20',
      'ww': 'lt-lg:px5 max-w-2xl',
      'web-w': 'ww wfull mxauto',
      'web-wide-w': 'lt-lg:px5 max-w-3xl wfull mxauto',
      'focusable': 'focus-visible:(outline-1 outline-brand-green outline-dashed)',
      'profile-link': 'px3 py3.5 sm:py3 fcc text-inherit hover:text-brand-green focusable duration-300',
      'fcc': 'flex items-center justify-center',
      'fyc': 'flex items-center',
      'fxc': 'flex justify-center',
      'logo-st': 'font-logo fc font-italic py1 px2 text-6 sm:text-7 text-brand dark:(text-brand-dark active:text-brand-active) focusable hover:text-brand duration-400',
      'contact-link': 'text-lg underline underline-1px underline-offset-3 underline-gray-2 hover:underline-brand-yellow focus-visible:outline-none focus-visible:underline-gray-3/70 focus-visible:dark:underline-gray-8/70 dark:underline-gray-8/20 dark:hover:underline-gray-8/70',
    },
    [/^size-(.*)$/, ([, c]) => `w-${c} h-${c}`],
  ],
  rules: [
    ['gradient-3', { background: 'radial-gradient(circle at top center,rgba(15, 157,88,.3) 0,transparent 50%,transparent 100%)' }],
    ['gradient-5', { background: 'radial-gradient(circle at top center,rgba(15, 157,88,.5) 0,transparent 50%,transparent 100%)' }],
  ],

  theme: {
    colors: {
      dark: '#050505',
      brand: {
        DEFAULT: 'rgba(66,133,244,1)',
        dark: 'rgba(53,105,190,1)',
        active: 'rgba(41,79,142,1)',
        red: 'rgba(219,68,55,1)',
        yellow: 'rgba(244,180,0,1)',
        green: 'rgba(15,157,88,1)',
      },
    },
    fontFamily: {
      sans: 'Urbanist',
      mono: 'DM Mono',
      secondary: 'Libre Baskerville',
      logo: 'Luckiest Guy',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
  ],
  extractors: [
    extractorMdc(),
  ],
  content: {
    pipeline: {
      include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
