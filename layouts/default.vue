<template>
  <div flex="~ col" min-h-100dvh relative>
    <WebLayoutHeader />
    <main flex-1 pt20>
      <slot />
    </main>
    <GoBack />
    <!-- <WebLayoutFooter2 /> -->
    <!-- <SvgPattern /> -->
    <SpotifyRecentPlay />
  </div>
</template>
