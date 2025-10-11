<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { computed, ref } from 'vue'

const notes = ref([
  { id: 1, title: 'Первая', content: 'Пример текста' },
  { id: 2, title: '1Вторая', content: 'Ещё одна заметка' },
])

const selectedId = ref(null)
const selectedNote = computed(() =>
    notes.value.find((n) => n.id === selectedId.value)
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
  <div class="todo-container">
    <p>Todo</p>
    <div class="todo-layout">
      <div class="sidebar">
        <button class="btn btn-primary w-100" @click="addNote">
          Добавить
        </button>
        <div class="notes-list">
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
      </div>

      <div class="content-area">
        <h5>Тут отображается выделенная заметка</h5>
        <div v-if="selectedNote">
          <h3>{{ selectedNote.title }}</h3>
          <p>{{ selectedNote.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.todo-layout {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}

.sidebar {
  width: 300px;
  min-width: 300px;
  border-right: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.notes-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.list-group {
  height: 100%;
  overflow-y: auto;
}

.content-area {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>