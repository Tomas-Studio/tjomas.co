<template>
  <div class="gradient" />
</template>

<style>
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.gradient {
  --uno: h500px w500px;
  --uno: filter-blur-[120px] op20;
  --uno: bg-gradient-to-l from-brand-yellow to-brand;
  --uno: absolute bottom-0 left-1/3;
  border-radius: 100%;
  animation: rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
}
</style>
