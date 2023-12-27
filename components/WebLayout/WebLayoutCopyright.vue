<template>
  <div mt5 text-3.5 flex gap-1 flex-wrap>
    <p fyc>
      <span i-solar:copyright-outline mr1 mb1px />
      {{ (new Date()).getFullYear() }} Tunji Olakunle (Tjomas) •
    </p>
    <p>
      Made with
      <NuxtLink
        underline hover="no-underline"
        to="https://nuxt.com"
        target="_blank"
        aria-label="Link to Nuxt"
        focusable
      >
        Nuxt
      </NuxtLink>
    </p>
  </div>
</template>
