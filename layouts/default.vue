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
</template>
