<script setup lang="ts">
const CONVERTING = 'Converting'.split('')
const DESIGNS = 'Designs'.split('')
const PRODUCTS = 'Products'.split('')

const largerThanSm = useMediaQuery('(min-width: 600px)', { ssrWidth: 600 })

const { x, y } = useMouse()

const card = useTemplateRef('card')
const { height, width } = useElementSize(card)

const cardTransform = computed(() => {
  const MAX_ROTATION = 7

  const rX = (
    MAX_ROTATION / 2 - (y.value / height.value) * MAX_ROTATION
  ).toFixed(2) // x-axis rotation

  const rY = (
    (x.value / width.value) * MAX_ROTATION - MAX_ROTATION / 2
  ).toFixed(2) // y-axis rotation

  return largerThanSm.value
    ? `perspective(${width.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    : ``
})
</script>

<template>
  <div web-w relative block>
    <div pt16>
      <div relative>
        <div ref="card" :style="{ transform: cardTransform }" class="home-drift absolute left-4 lg:left-1.5/10 top--5 h-60 w-full lg:h-85 lg:w-120 of-hidden rounded-1 z--1 preserve-3d transition-transform duration-250 ease-out" />
        <div relative z-2>
          <div class="font-acorn text-6xl sm:text-7xl lg:text-8xl flex-col gap-y-1 relative z-1">
            <div relative>
              <span v-for="letter, idx of CONVERTING" :key="idx" :style="{ animationDelay: `${(idx + 2) / 10}s` }" class="op0 inline-block animate-[1s_ease_0s_forwards_intro]">{{ letter }}</span>
            </div>
            <div wmax relative>
              <span v-for="letter, idx of DESIGNS" :key="idx" :style="{ animationDelay: `${(idx + 4) / 10}s` }" class="op0 inline-block animate-[1s_ease_0s_forwards_intro]">{{ letter }}</span>
              <span class="text-2xl sm:text-3xl text-brand-yellow absolute right--10 lg:right--16 top-3.5 lg:top-8 op0 animate-[1s_ease_1.5s_forwards_intro-to]">to</span>
            </div>
            <div relative>
              <span v-for="letter, idx of PRODUCTS" :key="idx" :style="{ animationDelay: `${(idx + 6) / 10}s` }" class="op0 inline-block animate-[1s_ease_0s_forwards_intro]">{{ letter }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
