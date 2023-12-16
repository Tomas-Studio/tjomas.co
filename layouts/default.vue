<template>
  <div flex="~ col" h100dvh>
    <SiteLayoutNavBar />
    <main flex-1>
      <slot />
    </main>
    <SiteLayoutFooter />
  </div>
</template>
