<script setup>
import { ref, computed } from 'vue'
import Star from "@/components/Star.vue"

const rating = ref(0)

const ratingText = ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично']


const stars = computed(() => {
  return Array.from({ length: 5 }, (_, i) => i < rating.value)
})

function setRating(index) {
  rating.value = index + 1
}
</script>

<template>
  <div class="rating d-flex flex-column align-items-center">
    <div class="stars d-flex">
      <Star
          v-for="(filled, index) in stars"
          :key="index"
          :filled="filled"
          @click="setRating(index)"
      />
    </div>
    <p class="mt-2">
      {{ rating > 0 ? ratingText[rating - 1] : 'Выберите рейтинг' }}
    </p>
  </div>
</template>

<style scoped>
.rating p {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
