<template>
  <div flex="~ col" min-h-100dvh relative>
    <WebLayoutHeader />
    <main flex-1>
      <slot />
    </main>
    <GoBack />
    <WebLayoutFooter />
    <SvgPattern />
    <SpotifyRecentPlay />
  </div>
</template>
