<script setup lang="ts">
const { toc, page: post } = useContent()
const showToc = ref(false)
</script>

<template>
  <div
    class="lt-lg:hidden fixed top-24 left-8 h-80vh of-y-auto w-70 xl:w-75"
    @mouseenter="showToc = true"
    @mouseleave="showToc = false"
    @focusin="showToc = true"
    @focusout="showToc = false"
  >
    <template v-if="toc?.links?.length && post.showToc">
      <div v-tooltip.right="'Table of Content'" class="duration-300 mb3" :class="[showToc || post.showTocAlways ? 'op100' : 'op50']" i-streamline-interface-content-book-2-library-content-books-book-shelf-stack />
      <TocLinks :links="toc.links" class="duration-300" :class="[showToc || post.showTocAlways ? 'op100' : 'op0']" />
    </template>
  </div>
</template>
