<template>
  <aside class="mb-10 px-6 pt-5.5 pb-1px block bg-brand-yellow/20 dark:bg-brand-yellow/10 relative">
    <div absolute left-0 top-0 bottom-0 translate-x--3px h-full flex flex-col>
      <svg xmlns="http://www.w3.org/2000/svg" width="37.5" height="35" fill="none" viewBox="0 0 75 70" preserveAspectRatio="none" class="s1kdr47h">
        <path fill="var(--page-bg)" d="M54.3545 15.0483L46 0.5H0V64L5.42113 56.1695C7.66253 52.9319 11.3497 51 15.2874 51H33.542C51.9925 51 63.5426 31.0483 54.3545 15.0483Z" style="transition: fill var(--color-swap-duration) var(--color-swap-timing-function);" />
        <path fill="rgba(244,180,0,1)" d="M52.1101 4.52096C51.2932 3.07946 49.4625 2.57308 48.021 3.38993C46.5795 4.20678 46.0731 6.03754 46.8899 7.47904L52.1101 4.52096ZM15 54H37.2466V48H15V54ZM0 63V69.5H6V63H0ZM46.8899 7.47904L53.777 19.6328L58.9972 16.6747L52.1101 4.52096L46.8899 7.47904ZM37.2466 54C56.4023 54 68.4412 33.3405 58.9972 16.6747L53.777 19.6328C60.9545 32.2988 51.8049 48 37.2466 48V54ZM15 48C6.71573 48 0 54.7157 0 63H6C6 58.0294 10.0294 54 15 54V48Z" />
      </svg>
      <div flex-1 mt--1px w-3px bg-brand-yellow />
    </div>
    <div class="absolute top-0 left-0 p-1.5 text-brand-yellow translate-[calc(-50%+_4px),calc(-50%+_5px)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
    </div>
    <slot />
  </aside>
</template>
