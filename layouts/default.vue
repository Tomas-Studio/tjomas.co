<template>
  <div flex="~ col" min-h-100dvh relative>
    <WebLayoutHeader />
    <main flex-1 mt10>
      <slot />
    </main>
    <GoBack />
    <WebLayoutFooter />
  </div>
</template>
