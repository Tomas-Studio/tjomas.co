<script lang="ts" setup>
const { y: scroll } = useWindowScroll()
const lastScroll = ref(0)
const showNav = ref(true)

onMounted(() => {
  useEventListener('scroll', () => {
    if (scroll.value === 0)
      showNav.value = true
    if (scroll.value <= 300 || scroll.value < lastScroll.value)
      showNav.value = true
    if (scroll.value > lastScroll.value)
      showNav.value = false
    lastScroll.value = scroll.value
  })
})
</script>

<template>
  <header
    class=" fixed top-0 left-0 flex wfull py3 sm:py4 z-40 duration-300 ease-in-out transition-transform"
    :class="[scroll > 80 ? 'backdrop-blur-2 bg-white/90 dark:bg-dark/85' : '', showNav ? '' : '-translate-y-full']"
  >
    <WebLayoutHeaderContent />
  </header>
</template>
