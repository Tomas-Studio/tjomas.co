<script setup lang="ts">
import { useMotions } from '@vueuse/motion'

const player = ref<any>(null)
// get tracks sections
const { data: token } = await useFetch('/api/authorize')
const ids = '6pWgRkpqVfxnj3WuIcJ7WP,6ZFbXIJkuI1dVNWvzJzown,3CLSHJv5aUROAN2vfOyCOh'
const query = { ids }
const { data } = await useFetch<any>('https://api.spotify.com/v1/tracks', {
  headers: {
    Authorization: `Bearer ${token.value}`,
  },
  params: query,
  deep: false,
})

const selectedTrack = computed(() => {
  return data.value.tracks![Math.floor(Math.random() * data.value.tracks!.length)]
})

// audio player section
const isPaused = ref<boolean>(false)
function play() {
  // console.log(player.value);
  isPaused.value = player.value!.paused
  isPaused.value ? player.value?.play() : player.value?.pause()
}

// watch(()=> selectedTrack, ()=> {
//   player.value = player.value
// })

// animate section
const show = ref(false)
const motions = useMotions()

const initial = ref({ width: 0, opacity: 0, marginLeft: 0 })
const enter = ref({ width: 180, opacity: 1, marginLeft: 4 })
</script>

<template>
  <div
    v-if="data && data.tracks.length > 0"
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
    <audio :ref="(el) => { player = el }" aria-hidden="true" :title="selectedTrack.name" sr-only :src="selectedTrack.preview_url" />
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
          <a :aria-label="`Open ${selectedTrack.name} on spotify`" :href="selectedTrack.external_urls.spotify" focus-visible:underline target="_blank" title="open">
            {{ selectedTrack.name }}
          </a>
        </p>
        <p text="~ 3 gray-9" leading-none truncate>
          {{ selectedTrack.artists.map((e: any) => e.name).join(', ') }}
        </p>
      </div>
    </Transition>
  </div>
</template>
