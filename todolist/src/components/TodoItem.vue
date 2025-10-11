<script setup>
const props = defineProps({
  note: Object,
  isSelected: Boolean,
})

const emit = defineEmits(['select', 'delete'])

function handleSelect() {
  emit('select', props.note.id)
}

function handleDelete() {
  emit('delete', props.note.id)
}
</script>

<template>
  <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      :class="{ active: isSelected }"
      @click="handleSelect"
  >
    <span>{{ note.title }}</span>
    <button
        class="btn btn-sm btn-danger"
        @click.stop="handleDelete"
    >
      ×
    </button>
  </li>
</template>

<script>

</script>

<style scoped>

</style>