<script setup lang="ts">
import { useMotions } from '@vueuse/motion'

// get a track to preview
const { data: track } = await useFetch('/api/track')

// audio player section
const audioTag = ref<HTMLAudioElement | null>(null)
const { play, isPaused } = useAudioTrack(audioTag)

// animate section
const show = ref(false)
const motions = useMotions()

const initial = ref({ width: 0, opacity: 0, marginLeft: 0 })
const enter = ref({ width: 180, opacity: 1, marginLeft: 4 })
</script>

<template>
  <div
    v-if="track"
    bg-brand-green fixed bottom-4 left-3
    wmax p1.5 rounded-full fyc
    transition-all duration-300
    @mouseenter="show = true"
    @mouseleave="show = false"
    @focusin="show = true"
    @focusout="show = false"
    @focus="show = false"
  >
    <button
      aria-label="Play Experience by Ludovico Einaudi"
      active:text-brand-yellow duration-300 rounded-full
      focus-visible="~ outline-2 outline-brand-yellow outline-dashed"
      @click="play"
    >
      <div
        aria-hidden="true"
        shrink-0 h9 w9
        :class="[
          !show ? 'i-bxl-spotify' : '',
          show && !isPaused ? 'i-ic-baseline-play-circle' : '',
          show && isPaused ? 'i-ic-baseline-pause-circle-filled' : '',
        ]"
      />
    </button>
    <audio ref="audioTag" aria-hidden="true" sr-only :src="track.preview_url" />
    <Transition :css="false" @leave="(_: any, done: () => void) => motions.title.leave(done)">
      <div
        v-if="show"
        v-motion="'title'"
        :initial="initial"
        :enter="enter"
        :leave="initial"
        of-hidden wmax
        relative
      >
        <p class="text-3.5 text-gray-2 fw500 leading-none truncate">
          <a
            :aria-label="`Open ${track.name} on spotify`"
            :href="track.external_urls.spotify"
            focus-visible:underline
            target="_blank" title="open"
          >
            {{ track.name }}
          </a>
        </p>
        <p text="~ 3 gray-9" leading-none truncate>
          {{ track.artists.map((e: any) => e.name).join(', ') }}
        </p>
      </div>
    </Transition>
  </div>
</template>
