<template>
  <aside class="mb-10 px-6 pt-5 pb-1px block bg-brand/20 dark:bg-brand/10 relative">
    <div absolute left-0 top-0 bottom-0 translate-x--3px h-full flex flex-col>
      <svg xmlns="http://www.w3.org/2000/svg" width="28.5" height="34.5" fill="none" viewBox="0 0 57 69" preserveAspectRatio="none" class="sl0r50n">
        <path fill="var(--page-bg)" d="M54 0V0.716804C54 25.9434 35.0653 47.1517 10 50L0 57V0H54Z" style="transition: fill var(--color-swap-duration) var(--color-swap-timing-function);" />
        <path fill="rgba(66,133,244,1)" d="M56.9961 4.15364C57.0809 2.49896 55.8083 1.08879 54.1536 1.00394C52.499 0.919082 51.0888 2.19168 51.0039 3.84636L56.9961 4.15364ZM9.09704 51.7557L8.49716 48.8163L9.09704 51.7557ZM6 69V59.2227H0V69H6ZM9.69692 54.6951L14.3373 53.7481L13.1375 47.8693L8.49716 48.8163L9.69692 54.6951ZM14.3373 53.7481C38.202 48.8777 55.7486 28.4783 56.9961 4.15364L51.0039 3.84636C49.8967 25.4384 34.3213 43.5461 13.1375 47.8693L14.3373 53.7481ZM6 59.2227C6 57.0268 7.54537 55.1342 9.69692 54.6951L8.49716 48.8163C3.55195 49.8255 0 54.1756 0 59.2227H6Z" />
      </svg>
      <div flex-1 mt--1px w-3px bg-brand />
    </div>
    <div class="absolute top-0 left-0 p-1.5 text-brand translate-[calc(-50%+_2px),calc(-50%+_5px)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
    </div>
    <slot />
  </aside>
</template>
