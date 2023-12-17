<template>
  <div flex="~ col" h100dvh>
    <WebLayoutHeader />
    <main flex-1>
      <slot />
    </main>
    <WebLayoutFooter />
  </div>
</template>
