<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  filled: Boolean
})
</script>

<template>
  <i
      :class="['star', filled ? 'bi-star-fill text-warning' : 'bi-star text-secondary']"
      style="cursor: pointer;"
  ></i>
</template>

<style scoped>
.star {
  font-size: 50px;
  margin-right: 4px;
}
</style>
