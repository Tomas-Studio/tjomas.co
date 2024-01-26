<script setup lang="ts">
const { x, y } = useMouse()

const card = ref<HTMLDivElement | null>(null)
const { height, width } = useElementSize(card)

const cardTransform = computed(() => {
  const MAX_ROTATION = 7

  const rX = (
    MAX_ROTATION / 2 - (y.value / height.value) * MAX_ROTATION
  ).toFixed(2) // x-axis rotation

  const rY = (
    (x.value / width.value) * MAX_ROTATION - MAX_ROTATION / 2
  ).toFixed(2) // y-axis rotation

  return `perspective(${width.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<template>
  <div web-w relative block>
    <div pt16>
      <div relative>
        <div ref="card" :style="{ transform: cardTransform }" class="absolute left-4 lg:left-1/10 top--5 h-60 w-75 lg:h-90 lg:w-110 of-hidden rounded-8 z--1 bg-neutral-2/40 dark:bg-neutral-9/40 preserve-3d transition-transform duration-250 ease-out" />
        <div relative z-2>
          <div class="font-acorn text-6xl sm:text-7xl lg:text-8xl flex-col gap-y-1">
            <div relative lg:ml20>
              Converting
            </div>
            <div wmax relative>
              Designs <span text-2xl text-brand-yellow absolute right--10 lg:right--16 top-3.5 lg:top-8>to</span>
            </div>
            <div relative lg:ml20>
              Products
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
