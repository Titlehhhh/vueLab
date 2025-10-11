<script setup>
import { ref } from 'vue'

const props = defineProps({
  note: Object,
  isSelected: Boolean,
})

const emit = defineEmits(['select', 'delete', 'update:title'])

const isEditing = ref(false)
const editTitle = ref('')

function handleSelect() {
  if (!isEditing.value) {
    emit('select', props.note.id)
  }
}

function handleDelete() {
  emit('delete', props.note.id)
}

function startEdit() {
  editTitle.value = props.note.title
  isEditing.value = true
}

function saveEdit() {

  console.log("Edit:", editTitle.value)

  if (editTitle.value.trim()) {
    emit('update:title', editTitle.value.trim())
  }
  isEditing.value = false
}

function cancelEdit() {
  isEditing.value = false
}
</script>

<template>
  <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      :class="{ active: isSelected }"
      @click="handleSelect"
  >
    <div class="flex-grow-1"
         :title="'Двойной клик для редактирования'"
         @dblclick="startEdit">
      <div v-if="isEditing" class="d-flex gap-1">
        <input
            v-model="editTitle"
            @keyup.enter="saveEdit"
            @keyup.esc="cancelEdit"
            @blur="saveEdit"
            class="form-control form-control-sm"
        >
      </div>
      <span
          v-else>
        {{ note.title }}
      </span>
    </div>

    <button
        v-if="!isEditing"
        class="btn btn-sm btn-danger ms-2"
        @click.stop="handleDelete"
    >
      ×
    </button>
  </li>
</template>

<style scoped>
.list-group-item {
  cursor: pointer;
}
</style>