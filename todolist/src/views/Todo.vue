<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useTodoStore } from '@/stores/todo.js'
import { ref, computed } from 'vue'

const todoStore = useTodoStore()

console.log('todoStore:', todoStore)
console.log('todoStore.notes:', todoStore.notes)
console.log('Array.isArray:', Array.isArray(todoStore.notes))

const selectedId = ref(1)
const showDeleteModal = ref(false)
const noteToDelete = ref(null)

const selectedNote = computed(() => todoStore.getNoteById(selectedId.value))

function selectNote(id) {
  selectedId.value = id
}

function confirmDeleteNote(id) {
  noteToDelete.value = id
  showDeleteModal.value = true
}
function addNote() {
  const newNote = todoStore.addNote()
  selectedId.value = newNote.id
}
function deleteNote() {

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
                v-for="note in todoStore.notes.value"
                :key="note.id"
                :note="note"
                :isSelected="note.id === selectedId"
                @update:title="todoStore.updateNoteTitle(note.id, $event)"
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