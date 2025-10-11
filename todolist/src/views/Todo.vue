<script setup>
import TodoItem from '@/components/TodoItem.vue'

import { ref, computed } from 'vue'

const notes = ref([
  { id: 1, title: 'Первая', content: 'Пример текста' },
  { id: 2, title: '1Вторая', content: 'Ещё одна заметка' },
])

const selectedId = ref(null)
const selectedNote = computed(() =>{
    console.log('asd')
    return  notes.value.find((n) => n.id === selectedId.value)
}
)

function addNote() {
  const id = Date.now()
  notes.value.push({ id, title: 'Новая заметка', content: '' })
  selectedId.value = id
}

function selectNote(id) {
  selectedId.value = id
}

function deleteNote(id) {
  console.log(id)
  notes.value = notes.value.filter((n) => n.id !== id)
  if (selectedId.value === id) selectedId.value = null
}
</script>

<template>
  <p>Todo</p>
  <div>

    <div class="row g-0 h-100">
      <div class="col-3 border-end p-3">
        <button class="btn btn-primary w-100">Добавить</button>
        <h5>Тут список</h5>
        <ul class="list-group">
          <TodoItem
              v-for="note in notes"
              :key="note.id"
              :note="note"
              :isSelected="note.id === selectedId"
              @select="selectNote"
              @delete="deleteNote"
          />
        </ul>

      </div>

      <!-- Правая колонка -->
      <div class="col-9 p-3">
        <h5>Тут отображается выделенная заметка</h5>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

</style>