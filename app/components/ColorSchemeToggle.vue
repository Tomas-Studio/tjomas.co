<template>
  <button
    v-tooltip.bottom="'Change Theme'" duration-300 px3 py3.5
    sm:py3
    cursor-pointer
    hover="text-brand-green"
    focusable
    type="button"
    aria-label="Toggle color scheme"
    @click="toggleTheme"
  >
    <div i-line-md-confirm-circle-twotone-to-circle-transition dark:i-line-md-confirm-circle-twotone-to-circle-twotone-transition text-5.5 />
  </button>
</template>
