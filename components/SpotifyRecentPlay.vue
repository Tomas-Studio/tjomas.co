<script setup lang="ts">
import { useMotions } from '@vueuse/motion'

const motions = useMotions()
const show = ref(false)

const initial = ref({ width: 0, opacity: 0, marginLeft: 0 })
const enter = ref({ width: 150, opacity: 1, marginLeft: 4 })
</script>

<template>
  <div
    bg-brand-green fixed bottom-4 left-3
    wmax p1.5 rounded-full fyc
    transition-all duration-300
    @mouseenter="show = true"
    @mouseleave="show = false"
    @focusin="show = true"
    @focusout="show = false"
  >
    <button
      aria-label="Play Experience by Ludovico Einaudi"
      active:text-brand-yellow duration-300 rounded-full
      focus-visible="~ outline-2 outline-brand-yellow outline-dashed"
    >
      <div aria-hidden="true" shrink-0 h9 w9 :class="show ? 'i-ic-baseline-play-circle' : 'i-bxl-spotify'" />
    </button>
    <Transition :css="false" @leave="(_: any, done: () => void) => motions.title.leave(done)">
      <div
        v-if="show"
        v-motion="'title'"
        :initial="initial"
        :enter="enter"
        :leave="initial"
        of-hidden wmax
      >
        <p text="~ 3.25 gray-2" fw500 leading-none>
          Experience
        </p>
        <p text="~ 3 gray-9" leading-none truncate>
          Ludovico Einaudi
        </p>
      </div>
    </Transition>
  </div>
</template>

<!-- to="https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj?si=JtSiXGMiTImM3CFitaYd4g"
aria-label="Play Experience by Ludovico Einaudi" -->
