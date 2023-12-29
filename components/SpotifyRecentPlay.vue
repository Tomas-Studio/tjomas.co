<template>
  <button aria-label="Play" bg-brand-green class="fixed bottom-4 left-3 z10 wmax p2 rounded-full fyc gap-x-2 group ">
    <div aria-hidden="true" i-fa6-brands-spotify h8 w8 shrink-0 />
    <div class="hidden group-hover:block">
      <!-- <span block text-sm mb--1 text-gray-7>On repeat</span> -->
      <div
        to="https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj?si=JtSiXGMiTImM3CFitaYd4g"
        aria-label="Play Experience by Ludovico Einaudi"
        class="truncate text-gray-2"
      >
        Experience • Ludovico Einaudi et al
      </div>
    </div>
  </button>
</template>
