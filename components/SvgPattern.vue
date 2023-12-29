<template>
  <svg v-if="$route.fullPath === '/'" class="absolute top-0 right-0 top-0 -z-10 h-50rem w-full md:w1/2 stroke-brand-yellow/20 dark:stroke-brand-yellow/20 [mask-image:radial-gradient(25rem_25rem_at_center,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="box" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-1" class="overflow-visible fill-brand-green/30 dark:fill-brand-green/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
    </svg>
    <rect width="1200%" height="100%" stroke-width="0" fill="url(#box)" />
  </svg>
</template>
