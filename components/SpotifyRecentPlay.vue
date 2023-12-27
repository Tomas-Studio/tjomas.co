<template>
  <div class="sm:w70% p2.5 rounded-full bg-brand-green fyc gap-x-4">
    <div i-fa6-brands-spotify h10 w10 shrink-0 />
    <div>
      <span block text-sm mb--1 text-gray-7>On repeat</span>
      <NuxtLink
        to="https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj?si=JtSiXGMiTImM3CFitaYd4g"
        target="_blank" focus-visible:underline outline-none
        aria-label="Play Experience by Ludovico Einaudi"
        class="truncate ..."
      >
        Experience • Ludovico Einaudi et al
      </NuxtLink>
    </div>
  </div>
</template>
