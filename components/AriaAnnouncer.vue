<script setup lang="ts">
import type { AriaAnnounceType, AriaLive } from '~/composables/useAria'

const router = useRouter()
const { announce, ariaAnnouncer } = useAriaAnnouncer()

const ariaLive = ref<AriaLive>('polite')
const ariaMessage = ref<string>('')

function onMessage(event: AriaAnnounceType, message?: string) {
  if (event === 'announce')
    ariaMessage.value = message!
  else if (event === 'mute')
    ariaLive.value = 'off'
  else
    ariaLive.value = 'polite'
}

onMounted(() => {
  ariaAnnouncer.on(onMessage)

  router.beforeEach(() => {
    announce('Loading Page, please wait')
  })

  router.afterEach((_, from) => {
    from && setTimeout(() => {
      requestAnimationFrame(() => {
        const title = document.title.trim().split('•')
        announce(`${title[0]} Page Loaded`)
      })
    }, 500)
  })
})
</script>

<template>
  <div id="reader-polite" role="status" sr-only :aria-live="ariaLive" v-html="ariaMessage" />
</template>
