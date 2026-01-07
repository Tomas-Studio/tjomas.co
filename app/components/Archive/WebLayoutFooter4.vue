<template>
  <footer>
    <div web-w my10>
      <div>
        <p text-3.25 dark:text-gray-500 text-gray-600 fyc>
          <span i-solar:copyright-outline mr1 mb1px />
          {{ (new Date()).getFullYear() }} Tunji Olakunle (tjomas)
          • Code licensed under <NuxtLink to="https://opensource.org/licenses/MIT/" target="_blank" underline ml1 hover="no-underline">
            MIT
          </NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>
