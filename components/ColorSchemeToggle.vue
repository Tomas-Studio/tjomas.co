<template>
  <button
    duration-300 px3 py3.5 sm:py3
    cursor-pointer
    hover="text-brand-dark"
    focusable
    type="button"
    aria-label="Toggle color scheme"
    @click="toggleTheme"
  >
    <div i-line-md:moon-to-sunny-outline-loop-transition dark:i-solar:moon-outline text-5 />
  </button>
</template>
