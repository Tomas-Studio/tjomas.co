<template>
  <div relative of-hidden>
    <GradientBg />
    <div flex="~ col" min-h-100dvh relative z1>
      <WebLayoutHeader />
      <main flex-1 pt20>
        <slot />
      </main>
      <WebLayoutFooter />
      <SpotifyRecentPlay />
    </div>
  </div>
  <div style="background-image:url(/noise.0e24d0e5.png)" class="[z-index:-1] pointer-events-none absolute inset-0 bg-repeat bg-[size:180px] opacity-[0.035] dark:opacity-[0.025]" />
</template>
